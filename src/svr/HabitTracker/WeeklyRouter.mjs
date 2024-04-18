import 'express';
import { SolidNodeClient } from 'solid-node-client';
import { SolidClient } from '@inrupt/solid-client';

const express = require('express');
const app = express();
const port = 3000;

const client = new SolidNodeClient();

app.get('/week-dates', async (req, res) => {
  const session = await client.login();
  if (session.info.isLoggedIn) {
    const webId = session.info.webId;
    const fetch = session.fetch;

    const solidClient = new SolidClient({ fetch });

    const weekDatesContainerUrl = webId.split('/').slice(0, -1).join('/') + '/week-dates/';
    const weekDatesContainer = await solidClient.getContainer(weekDatesContainerUrl);

    const weekDates = [];
    for (const weekDate of weekDatesContainer) {
      if (weekDate.type === 'Document') {
        const weekDateData = await solidClient.getSolidDataset(weekDate.url);
        const weekDateObject = solidClient.getThing(weekDateData, weekDate.url);
        weekDates.push({
          date: solidClient.getStringNoLocale(weekDateObject, 'http://schema.org/date'),
        });
      }
    }

    res.status(200).json({ message: 'Week dates retrieved successfully', weekDates });
  } else {
    res.status(401).json({ message: 'User not logged in' });
  }
});

app.post('/week-dates', async (req, res) => {
  const session = await client.login();
  if (session.info.isLoggedIn) {
    const webId = session.info.webId;
    const fetch = session.fetch;

    const solidClient = new SolidClient({ fetch });

    const weekDate = req.body;
    const weekDateUrl = await solidClient.createDocument(webId.split('/').slice(0, -1).join('/') + '/week-dates/', weekDate);

    res.status(201).json({ message: 'Week date created', weekDateUrl });
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
});

app.get('/week-dates/:id', async (req, res) => {
  const session = await client.login();
  if (session.info.isLoggedIn) {
    const webId = session.info.webId;
    const fetch = session.fetch;

    const solidClient = new SolidClient({ fetch });

    const weekDateUrl = req.params.id;
    const weekDateData = await solidClient.getSolidDataset(weekDateUrl);
    const weekDateObject = solidClient.getThing(weekDateData, weekDateUrl);

    const weekDate = {
      date: solidClient.getStringNoLocale(weekDateObject, 'http://schema.org/date'),
    };

    res.status(200).json({ message: 'Week date retrieved successfully', weekDate });
  } else {
    res.status(401).json({ message: 'User not logged in' });
  }
});

app.put('/week-dates/:id', async (req, res) => {
  const session = await client.login();
  if (session.info.isLoggedIn) {
    const webId = session.info.webId;
    const fetch = session.fetch;

    const solidClient = new SolidClient({ fetch });

    const weekDateUrl = req.params.id;
    const weekDateData = await solidClient.getSolidDataset(weekDateUrl);
    const weekDateObject = solidClient.getThing(weekDateData, weekDateUrl);

    const updatedWeekDate = {
   ...weekDateObject,
      'http://schema.org/date': solidClient.setStringNoLocale(req.body.date, 'http://schema.org/date'),
    };

    const updatedWeekDateData = solidClient.setThing(weekDateData, updatedWeekDate);
    await solidClient.saveSolidDatasetAt(weekDateUrl, updatedWeekDateData);

    res.status(200).json({ message: 'Week date updated successfully' });
  } else {
    res.status(401).json({ message: 'User not logged in' });
  }
});

app.delete('/week-dates/:id', async (req, res) => {
  const session = await client.login();
  if (session.info.isLoggedIn) {
    const webId = session.info.webId;
    const fetch = session.fetch;

    const solidClient = new SolidClient({ fetch });

    const weekDateUrl = req.params.id;
    await solidClient.deleteDocument(weekDateUrl);

    res.status(200).json({ message: 'Week
