import { Text, Page } from '@vercel/examples-ui'
import { Chat } from '../components/Chat'
import Link from 'next/link'

function Home() {
  return (
    <Page className="flex flex-col gap-12">
      <section className="flex flex-col gap-6">
        <Text variant="h1">Answerkey.info Assistant</Text>
        <Text className="text-zinc-600">
          Your teacher banned chat-gpt? No problem, we have a solution for you! Talk to our own AI chat bot and get your answers!
        </Text>
      </section>

      <section className="flex flex-col gap-3">
        <Text variant="h2">AI Chat Bot:</Text>
        <div className="lg:w-2/3">
          <Chat />
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <Text variant="text-zinc-600">Created by <Link href='https://medium.com/@pipsworld'>Charles Calapini</Link></Text>
      </section>
    </Page>
  )
}


export default Home
