<template>
  <div class="grid grid-cols-1 gap-10 lg:grid-cols-2">
    <div>
      <ProjectCard
        imageSrc="/projects/capstone/capstone-project.png"
        altText="Capstone Thesis Project"
        githubLink="https://github.com/g-gelo/first-thesis-trial"
        cardTitle="Capstone Thesis Project"
        description="This capstone project is a mobile app implemented as a Progressive Web App (PWA), fully installable and designed solely for mobile use without a desktop screen view."
        :badges="['Vue 3', 'TypeScript', 'JavaScript', 'PWA', 'Nuxt 3']"
      />
    </div>
    <div>
      <ProjectCard
        imageSrc="/projects/ojt/ojt-project.png"
        altText="OJT Project"
        githubLink="https://github.com/g-gelo/hospital_project"
        cardTitle="OJT Project"
        description="During my OJT, I developed a responsive landing page for South Imus Specialist Hospital, emphasizing intuitive navigation and visual appeal to showcase services and facilities."
        :badges="['Vue 3', 'Nuxt 3', 'Prisma']"
      />
    </div>
    <div>
      <ProjectCard
        imageSrc="/projects/portfolio/portfolio.png"
        altText="Portfolio Project"
        githubLink="https://github.com/g-gelo/portfolio"
        cardTitle="My Portfolio"
        description="Responsive, Simple, and Minimal custom theme for my portfolio"
        :badges="['Nuxt 3', 'Tailwind', 'Daisy Ui']"
      />
    </div>
  </div>
</template>

<script setup>
// No script logic needed here as per your provided code
</script>

<style scoped>
/* No custom styles are needed as TailwindCSS is used for layout */
</style>
