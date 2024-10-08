import Articles from "../components/articles";
import { BlogCard } from "../components/blogcars";
import BlogSection from "../components/blogcomponent";

import ReadingBlogList from "../components/readingblog";
function BlogPage() {
    return(
        
  
        <>
        <BlogSection/>
        <ReadingBlogList/>
        <BlogCard/>
        <Articles/>
        
        </>
    )
}
export default BlogPage;