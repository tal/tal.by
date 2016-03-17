page_layout do |page|
  if page.tagged? '_blog'
    '_blog_post_layout.html.erb'
  end
end
