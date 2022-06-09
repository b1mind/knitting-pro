import courses from '../lib/data/posts.json'

export async function get() {
  // let courses = await import('../../lib/data/posts.json')
  console.log(courses)

  return { body: { courses } }
}
