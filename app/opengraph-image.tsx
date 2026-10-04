import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'MARS DIGITAL MARKETING — Digital marketing agency in Lucknow'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#090713', color: 'white', padding: '80px', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', color: '#ff7849', fontSize: 30, marginBottom: 36 }}>MARS DIGITAL MARKETING</div>
      <div style={{ display: 'flex', fontSize: 68, fontWeight: 700, lineHeight: 1.1 }}>Digital marketing agency in Lucknow</div>
      <div style={{ display: 'flex', fontSize: 26, color: '#c4bdd8', marginTop: 36 }}>SEO · Google Ads · Meta Ads · Social Media · Websites</div>
      <div style={{ display: 'flex', fontSize: 24, color: '#c4bdd8', marginTop: 12 }}>Photography & Video · eCommerce</div>
      <div style={{ display: 'flex', fontSize: 22, color: '#ff7849', marginTop: 38 }}>digitalmarketinginlucknow.in</div>
    </div>, size,
  )
}
