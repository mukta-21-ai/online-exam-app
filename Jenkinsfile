
pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Fetching source code from GitHub'
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Building Online Exam Application'
                bat 'npm.cmd ci'
                bat 'npm.cmd run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Executing automated tests'
                bat 'npm.cmd test'
            }
        }
    }

    post {
        success {
            echo 'Build and Testing Successful!'
        }

        failure {
            echo 'Build or Testing Failed!'
        }
    }
}
