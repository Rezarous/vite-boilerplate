const express = require('express')
const axios = require('axios')
const crypto = require('crypto')

const app = express()
const PORT = 3000
const BOT_TOKEN = 'YOUR_BOT_TOKEN'
const SECRET = 'YOUR_BOT_SECRET'

app.get('/auth', async (req, res) => {
  const { hash, ...data } = req.query
  const checkString = Object.keys(data)
    .sort()
    .map((key) => `${key}=${data[key]}`)
    .join('\n')
  const hmac = crypto
    .createHmac('sha256', SECRET)
    .update(checkString)
    .digest('hex')

  if (hmac !== hash) {
    return res.redirect('http://localhost:5173?error=true')
  }

  try {
    const { data: userData } = await axios.get(
      `https://api.telegram.org/bot${BOT_TOKEN}/getChat`,
      {
        params: { chat_id: data.id },
      }
    )
    res.redirect(`http://localhost:5173?username=${userData.result.username}`)
  } catch (error) {
    res.redirect('http://localhost:5173?error=true')
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
