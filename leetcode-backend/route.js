const axios = require('axios');

app.get('/leetcode-data', async (req, res) => {
  const graphqlQuery = {
    // Your GraphQL query structure here
  };

  const options = {
    method: 'POST',
    url: 'https://leetcode.com/graphql',
    headers: {
      'Content-Type': 'application/json',
      'Cookie': `LEETCODE_SESSION=${process.env.LEETCODE_SESSION}; csrftoken=${process.env.CSRF_TOKEN}`,
      // Include CSRF token in the request headers if required by the endpoint
      'X-CSRFToken': process.env.CSRF_TOKEN
    },
    data: graphqlQuery,
  };

  try {
    const response = await axios(options);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching LeetCode data');
  }
});
