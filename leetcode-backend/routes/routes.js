const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();
const UserCalendar = require('../models/user-calender');
const LanguageProblemCount = require('../models/user-languages');

router.get('/leetcode-data', async (req, res) => {
    const graphqlQuery = {
        operationName: "languageStats",
        query: `
          query languageStats($username: String!) {
            matchedUser(username: $username) {
              languageProblemCount {
                languageName
                problemsSolved
              }
            }
          }
        `,
        variables: {
          username: process.env.USER_NAME 
        }
    };

    const options = {
      method: 'POST',
      url: 'https://leetcode.com/graphql',
      headers: {
        'Content-Type': 'application/json',
      },
      data: graphqlQuery,
    };

    try {
        const response = await axios(options);
        const { languageProblemCount } = response.data.data.matchedUser;
        const languageStats = languageProblemCount.map(item => new LanguageProblemCount(item.languageName, item.problemsSolved));
        res.json(languageStats);

    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching LeetCode data');
    }
});

router.get('/leetcode-data1', async (req, res) => {
    const constGraph = {
      operationName: "userProfileCalendar",
      query: `
        query userProfileCalendar($username: String!, $year: Int) {
          matchedUser(username: $username) {
            userCalendar(year: $year) {
              activeYears
              streak
              totalActiveDays
              dccBadges {
                timestamp
                badge {
                  name
                  icon
                }
              }
              submissionCalendar
            }
          }
        }
      `,
      variables: {
        username: process.env.USER_NAME,
        year: 2023 
      }
    };

    const options = {
      method: 'POST',
      url: 'https://leetcode.com/graphql',
      headers: {
        'Content-Type': 'application/json',
      },
      data: constGraph, 
    };

    try {
        const response = await axios(options);
        const userData = response.data.data.matchedUser.userCalendar;

        const userCalendar = new UserCalendar(
          userData.activeYears,
          userData.streak,
          userData.totalActiveDays,
          userData.dccBadges, 
          userData.submissionCalendar
        );

        res.json(userCalendar);

    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching LeetCode data');
    }
});

module.exports = router;