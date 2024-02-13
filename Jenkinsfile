
node {


    currentBuild.result = "SUCCESS"

    try {


      /*
        BUILD_NUMBER - The current build number. For example "153"
        BUILD_ID - The current build id. For example "2018-08-22_23-59-59"
        BUILD_DISPLAY_NAME - The name of the current build. For example "#153".
        JOB_NAME - Name of the project of this build. For example "foo"
        BUILD_TAG - String of "jenkins-${JOB_NAME}-${BUILD_NUMBER}".
        EXECUTOR_NUMBER - The unique number that identifies the current executor.
        NODE_NAME - Name of the "slave" or "master". For example "linux".
        NODE_LABELS - Whitespace-separated list of labels that the node is assigned.
        WORKSPACE - Absolute path of the build as a workspace.
        JENKINS_HOME - Absolute path on the master node for Jenkins to store data.
        JENKINS_URL - URL of Jenkins. For example http://server:port/jenkins/
        BUILD_URL - Full URL of this build. For example http://server:port/jenkins/job/foo/15/
        JOB_URL - Full URL of this job. For example http://server:port/jenkins/job/foo/
      */
      // checkout scm
      stage('Checkout'){


          echo "JENKINS_HOME: $JENKINS_HOME"
          echo "Workspace: $WORKSPACE"

          def values = "$JOB_NAME".tokenize( '/' )
          def BUILD_NAME = values[0]
          def artifact_name = "${BUILD_NUMBER}_${BUILD_NAME}_$BRANCH_NAME.zip"
          def ARTIFACT_PATH = "$JENKINS_HOME/jobs/$BUILD_NAME/branches/${BRANCH_NAME}/builds/${BUILD_NUMBER}/archive"
          def ARTIFACT_FULL_PATH = "$ARTIFACT_PATH/${artifact_name}"

          echo "Artifact path: $ARTIFACT_PATH"
          echo "Artifact fullpath: $ARTIFACT_FULL_PATH"

          // zip zipFile: "${artifact_name}.zip", archive: true, glob: '**/*'


          // archiveArtifacts (artifacts: '**/*')
       
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