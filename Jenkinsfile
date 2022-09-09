pipeline{
    agent {
        docker{
            image "davidhailu0/dockercomposedebian"
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
                sh "docker rm -f \$(docker ps -a -q)"
                sh "docker-compose run -d -p 9000:9000 server"
                sh "docker-compose run test"
            }
        }
        // stage("Deploy"){
        //     steps{
        //         sh "docker"
        //     }
        // }
    }
}
