pipeline {
  agent {
    docker { image 'node:16.14' }
  }
  stages {
    stage('Install dependencies') {
      steps { sh 'npm i' }
    }


    stage('Building the app') {
        steps { sh 'npm run build' }
    }
  }
}