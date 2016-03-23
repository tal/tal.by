class Sitefs::ViewModels::Page
  def ts_string
    if published_at > (Time.now - 31556926)
      published_at.stamp('March 8th')
    else
      published_at.stamp('March 8th, 2013')
    end
  end

  def ts_string_short
    if published_at > (Time.now - 31556926)
      published_at.stamp('Feb 8th')
    else
      published_at.stamp('Feb 8th, 2013')
    end
  end
end

page_layout do |page|
  if page.tagged? '_blog'
    '_blog_post_layout.html.erb'
  end
end
