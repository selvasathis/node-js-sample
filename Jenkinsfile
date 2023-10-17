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
                    sh 'docker run -itd --name nodejscont1 -P nodejsapp'
                }
            }
        }
    }
    post {
        success {
            echo 'the buid was successful'
        }
        failure {
            echo 'build was failed'
        }
    }
}
