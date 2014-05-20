
desc "Preview _site/"
task :preview do
  puts "\n## Opening _site/ in browser"
  status = system("/Applications/Chromium.app/Contents/MacOS/Chromium http://localhost:4000 &")
  puts status ? "Success" : "Failed"
end

task :dev do
  puts "\n## Launch Jekyll serve --watch --draft"
  cmd = 'osascript -e "tell application \"Terminal\"" \
    -e "tell application \"System Events\" to keystroke \"t\" using {command down}" \
    -e "do script \"Jekyll serve --drafts --watch\" in front window" \
    -e "end tell"
    > /dev/null'
  status = system(cmd)  
  puts status ? "Success" : "Failed"
  Rake::Task["preview"].execute
end

task :prod do
  puts "\n## Launch Jekyll serve --watch"
  cmd = 'osascript -e "tell application \"Terminal\"" \
    -e "tell application \"System Events\" to keystroke \"t\" using {command down}" \
    -e "do script \"Jekyll serve --watch\" in front window" \
    -e "end tell"
    > /dev/null'
  status = system(cmd)  
  puts status ? "Success" : "Failed"
  Rake::Task["preview"].execute
end

desc "Deploy _site/ to master branch"
task :deploy do
  puts "\n## Go to the _site folder"
  status = system("cd _site/")  
  puts status ? "Success" : "Failed"
  puts "\n## Staging modified files"
  status = system("git add -A .")
  puts status ? "Success" : "Failed"
  puts "\n## Committing a site build at #{Time.now.utc}"
  message = "Build site at #{Time.now.utc}"
  status = system("git commit -m \"#{message}\"")
  puts status ? "Success" : "Failed"
  puts "\n## Pushing commits to remote"
  status = system("git push")
  puts status ? "Success" : "Failed"
  puts "\n## Come back to the source folder"
  status = system("cd ..")
  puts status ? "Success" : "Failed"
end
