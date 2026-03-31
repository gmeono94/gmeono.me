<script setup>
const techs = [
  { name: 'Go', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
  { name: 'Swift', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
  { name: 'GCP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
  { name: 'RabbitMQ', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg' },
  { name: 'Grafana', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg' }
]
</script>

<template>
  <div class="marquee-wrapper">
    <div class="marquee-track">
      <div v-for="i in 3" :key="i" class="marquee-group">
        <div v-for="tech in techs" :key="`${i}-${tech.name}`" class="marquee-item">
          <img :src="tech.icon" :alt="tech.name" width="22" height="22" />
          <span>{{ tech.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.marquee-wrapper {
  border-top: 1px solid #222222;
  border-bottom: 1px solid #222222;
  background-color: #111111;
  overflow: hidden;
  padding: 18px 0;
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: scroll 40s linear infinite;
}

.marquee-track:hover {
  animation-play-state: paused;
}

.marquee-group {
  display: flex;
  flex-shrink: 0;
}

.marquee-item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 24px;
  flex-shrink: 0;
}

.marquee-item img {
  width: 22px;
  height: 22px;
  flex-shrink: 0;
}

.marquee-item span {
  color: #CCCCCC;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100% / 3));
  }
}
</style>
