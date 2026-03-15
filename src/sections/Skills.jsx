import Marquee from 'react-fast-marquee'
import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'

// Generate random but consistent track values (runs once at import time)
const randomBetween = (min, max) => Math.random() * (max - min) + min

const DIAGONAL_TRACKS = Array.from({ length: 45 }, (_, i) => {
  // Each track gets its own independent random values
  const r1 = Math.random()
  const r2 = Math.random()
  const r3 = Math.random()
  return {
    top: `${-40 + i * 4}%`,
    duration: randomBetween(18, 42),
    reverse: r1 > 0.5,
    opacity: randomBetween(0.03, 0.09),
    speed: randomBetween(30, 70),
  }
})

const Chip = ({ item }) => (
  <span className="marquee-chip">
    {item.deviconClass ? (
      <i className={`devicon-icon ${item.deviconClass}`} />
    ) : (
      <span className="marquee-dot" />
    )}
    <span className="text-sm font-semibold">{item.name}</span>
  </span>
)

const Skills = ({ skills }) => {
  const items = skills.groups.flatMap((group) => group.items)
  return (
    <section
      id="skills"
      className="section-spacing relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Diagonal background marquees */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 70%)',
        }}
      >
        {DIAGONAL_TRACKS.map((track, i) => (
          <div
            key={i}
            className="absolute left-[-80%] right-[-80%] flex whitespace-nowrap"
            style={{
              top: track.top,
              transform: 'rotate(-25deg)',
              transformOrigin: 'center center',
              opacity: track.opacity,
            }}
          >
            <Marquee speed={track.speed} direction={track.reverse ? 'right' : 'left'} autoFill>
              {items.map((item, idx) => (
                <span
                  key={idx}
                  className="mx-3 text-sm font-semibold uppercase tracking-widest text-ink-900 dark:text-mist-200 sm:text-base"
                >
                  {item.name}
                </span>
              ))}
            </Marquee>
          </div>
        ))}
      </div>

      {/* Foreground content */}
      <div className="relative z-10 w-full">
        <Container>
          <SectionHeader title="Technologies" />

          <div className="marquee-fade mb-4">
            <Marquee pauseOnHover speed={40}>
              {items.map((item) => (
                <div key={item.name} className="mx-2">
                  <Chip item={item} />
                </div>
              ))}
            </Marquee>
          </div>

          <div className="marquee-fade">
            <Marquee pauseOnHover speed={40} direction="right">
              {items.map((item) => (
                <div key={`rev-${item.name}`} className="mx-2">
                  <Chip item={item} />
                </div>
              ))}
            </Marquee>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default Skills
