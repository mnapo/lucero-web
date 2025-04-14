import { Check } from 'lucide-react'
import Image from 'next/image'
import { AspectRatio } from '../molecules/shadcn/aspect-ratio'
import { Badge } from '../molecules/shadcn/badge'

export default function Features() {
  return (
    <section className='py-16 md:py-24 lg:py-32 bg-primary text-secondary'>
      <div className='container mx-auto px-4 md:px-6 lg:px-8'>
        <div className='grid gap-8 lg:grid-cols-2'>
          <AspectRatio ratio={16 / 9}>
            <Image
              src='https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80'
              alt='Image'
              fill
              priority={false}
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className='rounded-md object-cover'
            />
          </AspectRatio>
          <div className='space-y-6'>
            <Badge variant='secondary' className='px-3 py-1 text-sm font-medium'>
              New Features
            </Badge>
            <h2 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>
              Build faster
            </h2>
            <p className='text-muted-foreground'>
              The framework offers a suite of powerful features to help you streamline your workflows and drive your
              project forward.
            </p>
            <ul className='space-y-4'>
              <li className='flex items-center space-x-2'>
                <Check className='h-6 w-6 text-secondary' />
                <div>
                  <h3 className='text-lg font-semibold'>Object-Oriented</h3>
                  <p className='text-muted-foreground'>
                    Re-usable customizable components.
                  </p>
                </div>
              </li>
              <li className='flex items-center space-x-2'>
                <Check className='h-6 w-6 text-secondary' />
                <div>
                  <h3 className='text-lg font-semibold'>Multiplatform</h3>
                  <p className='text-muted-foreground'>
                    Build for the web, android, iOS and desktop.
                    Let users play or work from their smarphones, computers and tablets at desire.
                  </p>
                </div>
              </li>
              <li className='flex items-center space-x-2'>
                <Check className='h-6 w-6 text-secondary' />
                <div>
                  <h3 className='text-lg font-semibold'>Scalable</h3>
                  <p className='text-muted-foreground'>
                    Easily scalate your application with our reliable and high-performance infrastructure.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}