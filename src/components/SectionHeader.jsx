const SectionHeader = ({ title, description }) => (
  <div className="mb-10 space-y-3">
    <h2 className="text-3xl font-semibold tracking-tight text-ink-900 dark:text-white sm:text-4xl lg:text-5xl">
      {title}
    </h2>
    {description ? (
      <p className="max-w-2xl text-base text-ink-700 dark:text-mist-200">
        {description}
      </p>
    ) : null}
  </div>
)

export default SectionHeader
