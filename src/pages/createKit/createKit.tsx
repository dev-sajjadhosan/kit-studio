import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Columns3Cog } from 'lucide-react'
import FindPackageDialog from '@/pages/createKit/components/findModal'

const projectPackages = {
  web: {
    framework: ['React', 'Vue', 'angular', 'nextJs', 'find'],
    language: ['javaScript', 'typeScript'],
    style_Library: ['TailwindCSS', 'bootstrap', 'find'],
    component_Library: ['DaisyUI', 'ShadcnUI', 'find'],
    icon_Library: ['React Icons', 'Lucide', 'Tabler', 'find'],
    animation: ['Framer Motion', 'GSAP', 'find'],
    extra_Packages: ['Toast', 'Notification', 'Carousel', 'find'],
    // backend: ['Express', 'NestJS', 'find'], // optional: checkbox to show
    // auth: ['OAuth', 'JWT', 'find'],
    // database: ['MongoDB', 'PostgreSQL', 'MySQL', 'find'],
  },
  backend: {
    framework: ['Express', 'NestJS', 'find'],
    env: ['dotenv'],
    auth: ['OAuth', 'JWT', 'find'],
    database: ['MongoDB', 'PostgreSQL', 'MySQL', 'find'],
    otherPackages: ['Cors', 'Helmet', 'find'],
  },
  database: {
    database: ['MongoDB', 'PostgreSQL', 'MySQL', 'find'],
    orm: ['Prisma', 'TypeORM', 'Sequelize', 'find'],
  },
  mobile: {
    framework: ['React Native', 'Flutter', 'find'],
    style: ['TailwindCSS', '', 'find'],
    componentLibrary: ['NativeBase', 'React Native Paper', 'find'],
    icon: ['ReactIcons', 'VectorIcons', 'find'],
    animation: ['Reanimated', 'Lottie', 'find'],
  },
  ai_ml: {
    language: ['Python', 'R', 'find'],
    libraries: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'find'],
    dataProcessing: ['Pandas', 'NumPy', 'find'],
  },
}

export default function CreateKitPage() {
  const pp = useParams()
  const nav = useNavigate()
  const projectType = pp.id || 'web' // fallback

  const [selections, setSelections] = useState<Record<string, unknown>>({})

  const handleSelect = (category: string, value: string) => {
    setSelections((prev) => ({ ...prev, [category]: value }))
  }

  // const handleCreate = () => {
  //   const payload = { projectId: projectType, selections }
  //   console.log('Creating kit with payload:', payload)

  // }

  return (
    <div className="p-5 flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-xl font-normal text-muted-foreground">
          Create your own {projectType} Kit
        </h3>
        <div className="flex items-center gap-3">
          <Button size={'sm'} variant={'secondary'}>
            <Columns3Cog />
            Customize Layout
          </Button>
        </div>
      </div>

      <section className="mx-auto w-2xl">
        {Object.entries(projectPackages[projectType]).map(
          ([category, options], i) => {
            return (
              <div key={category} className="flex items-start gap-5">
                <Label className="capitalize mt-5! mb-3! flex-1">
                  {category}
                </Label>
                <ul className="flex flex-wrap gap-3" key={i}>
                  {(options as string[]).map((opt, i) =>
                    opt === 'find' ? (
                      <FindPackageDialog />
                    ) : (
                      <li
                        key={i}
                        onClick={() => handleSelect(category, opt)}
                        className={`px-7 py-2 border text-sm tracking-wide border-secondary rounded-md cursor-pointer transition-all capitalize ${
                          selections[category] === opt
                            ? 'bg-secondary text-secondary-foreground border-primary'
                            : 'hover:bg-secondary'
                        }`}
                      >
                        {opt}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            )
          },
        )}
      </section>

      <div className="flex items-center justify-end gap-3 mt-9">
        <Button>Create</Button>
        <Button variant={'secondary'}>Fast Create</Button>
        <Button variant={'destructive'} onClick={() => nav(-1)}>
          Cancel
        </Button>
      </div>
    </div>
  )
}
