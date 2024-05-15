import { createSchedule } from './micro'
async function func1() {
  const scheduler = createSchedule()
  let a = 0
  scheduler.enqueue(() => {
    a = 1
  })
  scheduler.enqueue(() => {
    a = 2
  })
  scheduler.enqueue(() => {
    a = 3
  })
  scheduler.enqueue(() => {
    a = 4
  })
  console.log('a=', a)
  scheduler.flush()
  console.log('a=', a)
  await scheduler.tick
  console.log('a=', a)
}
func1()
