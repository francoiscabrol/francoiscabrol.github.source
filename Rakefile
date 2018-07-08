
desc "Preview _site/"
task :preview do
  puts "\n## Opening _site/ in browser"
  status = system("open http://localhost:4000 &")
  puts status ? "Success" : "Failed"
end

task :dev do
  puts "\n## Launch Jekyll serve --watch --draft"
  cmd = 'Jekyll serve --drafts --watch'
  status = system(cmd)
  puts status
  Rake::Task["preview"].execute
end

task :prod do
  puts "\n## Launch Jekyll serve --watch"
  cmd = 'Jekyll serve --watch'
  status = system(cmd)
  puts status ? "Success" : "Failed"
  Rake::Task["preview"].execute
end

desc "Deploy _site/ to master branch"
task :deploy do
  puts "\n## Go to the _site folder"
  status = Dir.chdir("_site")
  puts status ? "Success" : "Failed"
  puts "\n## Staging modified files"
  status = system("git add .")
  puts status ? "Success" : "Failed"
  puts "\n## Committing a site build at #{Time.now.utc}"
  message = "Build site at #{Time.now.utc}"
  status = system("git commit -m \"#{message}\"")
  puts status ? "Success" : "Failed"
  puts "\n## Pushing commits to remote"
  status = system("git push")
  puts status ? "Success" : "Failed"
end
