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
                    sh 'docker run -itd --name nodejscont1 -p "9098:8080" nodejsapp'
                }
            }
        }
    }
}

