import { SiteClient } from 'datocms-client'


export default async function getRequests(req, res) {
  if (req.method === 'POST') {

    const API_TOKEN = '2a561832e9baec09e4dac70a33f82c'
    const client = new SiteClient(API_TOKEN)
    
    const registerCreated = client.items.create({
      itemType: '966368',
      ...req.body
    })
    res.json({
      data: 'Aoba',
      registerCreated
    })
    return
  }

  res.status(404).json({
    message: 'No get'
  })
}
