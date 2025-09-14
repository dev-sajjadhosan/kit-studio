import Header from '@/components/custom/header'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import DynamicGreeting from '@/pages/Home/components/dynamicGreeting'
import LabScrollArea from '@/pages/Home/components/labScrollArea'
import { appStore } from '@/stores/appStore'
import { localStore } from '@/stores/localStore'
import {
  CircleQuestionMark,
  History,
  Plus,
  Search,
  Sparkles,
  Store,
  UserSearch,
} from 'lucide-react'

export default function Home() {
  const { data } = appStore()
  const { history } = localStore()
  return (
    <>
      <Header />
      <div className="flex flex-col gap-3 items-center justify-center mt-16">
        <DynamicGreeting />
        <Card className=" flex-row items-center gap-0 border-0 bg-zinc-900 w-xl px-3 py-0 rounded-lg mb-7">
          <Search size={19} className="text-muted-foreground" />
          <Input
            placeholder="Search your kit or Write your purpose"
            className="border-0 bg-transparent! tracking-wider font-normal text-xs! text-zinc-300"
          />
        </Card>
        <div className="mt-9 flex flex-col gap-16 w-10/12 mx-auto">
          <LabScrollArea
            data={data}
            label={`Studio Kit's`}
            labIcon={<Store size={17} className="text-muted-foreground" />}
          />
          {history.length <= 0 ? (
            ''
          ) : (
            <LabScrollArea
              data={history}
              label={`Recently Use`}
              labIcon={<History size={17} className="text-muted-foreground" />}
            />
          )}
          <LabScrollArea
            data={data}
            label={`Premium Kit's`}
            labIcon={<Sparkles size={17} className="text-muted-foreground" />}
          />
          <LabScrollArea
            data={data}
            label={`Trending Kit's`}
            labIcon={<UserSearch size={17} className="text-muted-foreground" />}
          />
          <section
            id="announcement"
            className="w-full lg:w-3xl mx-auto flex flex-col bg-neutral-900 p-11 rounded-xl"
          >
            <h3 className="text-xl text-center font-light">
              What's new coming ?
            </h3>
            <Card className="border-0 bg-transparent shadow-none">
              <CardContent>
                <ul className="grid grid-cols-2 gap-1">
                  {data.slice(0, 6).map((_, i) => (
                    <li
                      key={i}
                      className=" flex items-center gap-1.5 hover:bg-zinc-800 text-muted-foreground w-full px-7 py-2.5 rounded-md text-sm font-normal cursor-pointer duration-200"
                    >
                      <CircleQuestionMark strokeWidth={1.3} size={19} /> Lorem
                      ipsum dolor sit amet.
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            {/* <p className="text-xs font-normal tracking-wider capitalize mt-5">
              if you want to be the 1st to see the new features. then always on
              you <strong className="text-green-600">notifyMeFirst</strong>{' '}
              option on setting
            </p> */}
          </section>
          <section id="tutorial" className="grid grid-cols-3 gap-5 pb-16">
            <Card className="w-full border-0 mx-auto h-44 bg-stone-900">
              <CardContent className="flex flex-col items-center justify-center h-full">
                <Plus size={27} />
                <h3 className="text-xl font-light">Create New</h3>
                <p className="text-sm">
                  Want to make your own Kit and be one of us.
                </p>
              </CardContent>
            </Card>
            <Card className="w-full border-0 mx-auto h-44 bg-stone-900">
              <CardContent className="flex flex-col items-center justify-center h-full">
                <Plus size={27} />
                <h3 className="text-xl font-light">Documention</h3>
                <p className="text-sm">
                  Want to make your own Kit and be one of us.
                </p>
              </CardContent>
            </Card>
            <Card className="w-full border-0 mx-auto h-44 bg-stone-900">
              <CardContent className="flex flex-col items-center justify-center h-full">
                <Plus size={27} />
                <h3 className="text-xl font-light">Documention</h3>
                <p className="text-sm">
                  Want to make your own Kit and be one of us.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </>
  )
}
