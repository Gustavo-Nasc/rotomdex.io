type LoadingProps = {
  loadingMessage: string
}

export function Loading({ loadingMessage }: LoadingProps) {
  return (
    <div className="fixed rounded-md w-screen h-screen">
      {loadingMessage}
    </div>
  )
}