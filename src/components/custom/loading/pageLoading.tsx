import { Loader } from 'lucide-react'

export default function PageLoading() {
  return (
    <>
      <div className="flex flex-col p-5 gap-2.5 items-center justify-center h-[92.5vh] bg-stone-800">
        <Loader className="animate-spin" />
        <h3 className="text-sm tracking-wider text-muted-foreground">
          Please Wait
        </h3>
      </div>
    </>
  )
}
