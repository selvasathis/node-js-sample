pipeline {
    agent any
    stages {
        stage ('npm package') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }
        stage ('docker build') {
            steps {
                script {
                    sh 'docker build -t nodejsapp .'
                }
            }
        }
        stage ('container run') {
            steps {
                script {
                    sh 'docker run -itd --name nodejscont1 -p "3000:3000" nodejsapp'
                }
            }
        }
    }
}

