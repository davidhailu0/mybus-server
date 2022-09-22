pipeline{
    agent {
        docker{
            image "davidhailu0/dockeralpine:v1"
            args "-v /var/run/docker.sock:/var/run/docker.sock -u root --add-host=host.docker.internal:host-gateway"
        }
    }
    stages{
        stage("Build"){
            steps{
                sh "docker-compose build server"
                sh "docker-compose build test"
            }
        }
        stage("Test"){
            steps{
                sh "docker rm -f localserver"
                sh "docker-compose run test"
            }
        }
        stage("Deploy"){
            steps{
                sh "docker-compose run -d server"
            }
        }
    }
    post{
        always{
            sh "docker system prune"
        }
    }
}
