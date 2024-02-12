
node {


    currentBuild.result = "SUCCESS"

    try {

      // checkout scm
      stage('Checkout'){
        // zip zipFile: 'zipFile.zip', dir: '/home/dev/artifacts/'
        

        // zip zipFile: 'test.zip', archive: true, dir: '/home/dev/artifacts'
        // zip zipFile: 'test.zip', archive: true, dir: '/home/dev/artifacts'
        // archiveArtifacts artifacts: 'test.zip', fingerprint: true
        // zip dir: "$WORKSPACE", zipFile: "$WORKSPACE/artifacts/Reports_Build_${BUILD_NUMBER}.zip", archive: true

        steps {
          echo "$WORKSPACE"
          zip zipFile: "$WORKSPACE/output.zip", dir: '', glob: '', archive: true, overwrite: true
          archiveArtifacts artifacts: 'output.zip', fingerprint: true
          zip zipFile: '/home/dev/output.zip', dir: '', glob: '', archive: true, overwrite: true
          archiveArtifacts artifacts: 'output.zip', fingerprint: true
        }
        // zip zipFile: 'test.zip', archive: false, dir: "$WORKSPACE"
        // archiveArtifacts artifacts: "$WORKSPACE/test.zip", fingerprint: true

        // fileOperations([fileCopyOperation(excludes: '',
        //                             flattenFiles: false,
        //                             includes: "$WORKSPACE/**",
        //                             targetLocation: '/home/dev/artifacts/')])
      }

      stage('Test'){

      }

      stage('Build Docker'){

          echo 'dockerBuild.sh'
      }

      stage('Deploy'){

        echo 'Push to Repo'

        echo 'ssh to web server and tell it to pull new image'

        // sh 'mkdir $WORKSPACE/output'
        // sh 'cp -r /var/lib/jenkins/workspace/z'
      }

      stage('Cleanup'){

        echo 'prune and cleanup'
      }



    }
    catch (err) {

        // currentBuild.result = "FAILURE"

        //     mail body: "project build error is here: ${env.BUILD_URL}" ,
        //     from: 'xxxx@yyyy.com',
        //     replyTo: 'yyyy@yyyy.com',
        //     subject: 'project build failed',
        //     to: 'zzzz@yyyyy.com'

        throw err
    }

}