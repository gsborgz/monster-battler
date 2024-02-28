'use client'

export default function Main({ children }: { children: React.ReactNode }) {

  return (
    <main className='min-h-full w-full flex bg-blue-50 dark:bg-slate-800'>
      <section className='w-full h-full mx-48 mt-28 mb-5 text-slate-700 dark:text-neutral-50'>
        { children }
      </section>
    </main>
  );
}
