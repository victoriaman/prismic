if [ "$VERCEL_GIT_COMMIT_REF" != "main" ]; then
  echo "🛑 Not on main branch, skipping build."
  exit 1
fi

if [[ "$VERCEL_GIT_COMMIT_MESSAGE" != *"deploy"* ]]; then
  echo "🛑 Commit message doesn't contain 'deploy', skipping build."
  exit 1
fi

echo "✅ Build triggered on main with 'deploy' in commit message."
