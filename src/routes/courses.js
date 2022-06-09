import courses from '../lib/data/posts.json'

export async function get() {
  return { body: { courses } }
}
