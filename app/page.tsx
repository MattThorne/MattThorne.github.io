import { BlogPosts } from 'app/components/posts'
import SocialLinks from 'app/components/social-links'

export default function Page() {
  return (
    <section>
      <h1 className=" text-5xl font-semibold tracking-tighter">
        Matt Thorne
      </h1>
      <p className="text-lg  tracking-tighter">
        Software Engineer
      </p>
      <SocialLinks />
      <p className="mt-8 mb-4">
        {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`}
      </p>
      <div className="my-8">
        <h2 className="mb-2 text-xl font-semibold tracking-tighter">
          blog
        </h2>
        <BlogPosts />
      </div>
    </section>
  )
}
