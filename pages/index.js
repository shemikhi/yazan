import { html } from '../server'

export default function Home() {
  const body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? html
  const styles = html.match(/<style>([\s\S]*?)<\/style>/i)?.[1] ?? ''

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </>
  )
}

export const metadata = {
  title: 'Yaz Education | Your next chapter starts here',
  description: 'Personalized guidance for studying in Malaysia.',
}
