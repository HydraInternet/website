export default function NotFoundPage() {
  return (
    <div className="grow flex flex-col md:flex-row-reverse items-center justify-center gap-4">
      <div>
        <h1 className="text-4xl">404 - Not Found</h1>
        <p>How did you get here? Go back to where you've come from...</p>
      </div>
      <div className="border-2 rounded-md">
        <img src="/404.gif" alt="404 Not Found" width={360} />
      </div>
    </div>
  );
}
