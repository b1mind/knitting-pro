import courses from '../../lib/data/posts.json'

export async function get({ params }) {
  let slugTitle = params.slug

  let coursesData = courses.filter((course) => {
    return course.level === slugTitle
  })

  return {
    // headers: { 'Content-Type': 'application/json' },
    body: { coursesData },
  }
}
