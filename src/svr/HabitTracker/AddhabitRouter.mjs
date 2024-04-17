import 'express';
import { SolidNodeClient } from 'solid-node-client';
import { SolidClient } from '@inrupt/solid-client';

const express = require('express');
const app = express();
const port = 3000;

const client = new SolidNodeClient();

app.get('/habits', async (req, res) => {
  const session = await client.login();
  if (session.info.isLoggedIn) {
    const webId = session.info.webId;
    const fetch = session.fetch;

    const solidClient = new SolidClient({ fetch });

    const habitsContainerUrl = webId.split('/').slice(0, -1).join('/') + '/habits/';
    const habitsContainer = await solidClient.getContainer(habitsContainerUrl);

    const habits = [];
    for (const habit of habitsContainer) {
      if (habit.type === 'Document') {
        const habitData = await solidClient.getSolidDataset(habit.url);
        const habitObject = solidClient.getThing(habitData, habit.url);
        habits.push({
          name: solidClient.getStringNoLocale(habitObject, 'http://schema.org/name'),
          completed: solidClient.getBoolean(habitObject, 'http://schema.org/completed'),
          priority: solidClient.getBoolean(habitObject, 'http://schema.org/priority'),
        });
      }
    }

    res.status(200).json({ message: 'Habits retrieved successfully', habits });
  } else {
    res.status(401).json({ message: 'User not logged in' });
  }
});

app.post('/habits', async (req, res) => {
  const session = await client.login();
  if (session.info.isLoggedIn) {
    const webId = session.info.webId;
    const fetch = session.fetch;

    const solidClient = new SolidClient({ fetch });

    const habit = req.body;
    const habitUrl = await solidClient.createDocument(webId.split('/').slice(0, -1).join('/') + '/habits/', habit);

    res.status(201).json({ message: 'Habit created', habitUrl });
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
});

app.get('/habits/:id', async (req, res) => {
  const session = await client.login();
  if (session.info.isLoggedIn) {
    const webId = session.info.webId;
    const fetch = session.fetch;

    const solidClient = new SolidClient({ fetch });

    const habitUrl = req.params.id;
    const habitData = await solidClient.getSolidDataset(habitUrl);
    const habitObject = solidClient.getThing(habitData, habitUrl);

    const habit = {
      name: solidClient.getStringNoLocale(habitObject, 'http://schema.org/name'),
      completed: solidClient.getBoolean(habitObject, 'http://schema.org/completed'),
      priority: solidClient.getBoolean(habitObject, 'http://schema.org/priority'),
    };

    res.status(200).json({ message: 'Habit retrieved successfully', habit });
  } else {
    res.status(401).json({ message: 'User not logged in' });
  }
});

app.put('/habits/:id', async (req, res) => {
  const session = await client.login();
  if (session.info.isLoggedIn) {
    const webId = session.info.webId;
    const fetch = session.fetch;

    const solidClient = new SolidClient({ fetch });

    const habitUrl = req.params.id;
    const habitData = await solidClient.getSolidDataset(habitUrl);
    const habitObject = solidClient.getThing(habitData, habitUrl);

    const updatedHabit = {
    ...habitObject,
      'http://schema.org/name': solidClient.setStringNoLocale(req.body.name, 'http://schema.org/name'),
      'http://schema.org/completed': solidClient.setBoolean(req.body.completed, 'http://schema.org/completed'),
      'http://schema.org/priority': solidClient.setBoolean(req.body.priority, 'http://schema.org/priority'),
    };

    const updatedHabitData = solidClient.setThing(habitData, updatedHabit);
    await solidClient.saveSolidDatasetAt(habitUrl, updatedHabitData);

    res.status(200).json({ message: 'Habit updated successfully' });
  } else {
    res.status(401).json({ message: 'User not logged in' });
  }
});

app.delete('/habits/:id', async (req, res) =>
