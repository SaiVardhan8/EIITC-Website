pipeline {
    agent any

    environment {
        APP_NAME = 'eiitc-website'
        NODE_ENV = 'production'
        DOCKER_IMAGE = "${APP_NAME}:${BUILD_NUMBER}"
        DOCKER_REGISTRY = 'your-registry' // Update with your registry
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code...'
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Building Docker image...'
                dir('EIITC_Website') {
                    sh '''
                        docker build -t ${DOCKER_IMAGE} .
                        docker tag ${DOCKER_IMAGE} ${APP_NAME}:latest
                    '''
                }
            }
        }

        stage('Start Application') {
            steps {
                echo 'Starting application with Docker Compose...'
                dir('EIITC_Website') {
                    sh '''
                        docker compose down || true
                        docker compose up -d
                    '''
                }
            }
        }

        stage('Health Check') {
            steps {
                echo 'Performing health check...'
                sh '''
                    sleep 10
                    curl -f http://localhost:9040 || exit 1
                '''
            }
        }

        stage('Lint') {
            steps {
                echo 'Running linting...'
                dir('EIITC_Website') {
                    sh 'npm run lint || true'
                }
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
        }
        success {
            echo 'Pipeline executed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
            dir('EIITC_Website') {
                sh 'docker compose logs || true'
            }
        }
    }
}
