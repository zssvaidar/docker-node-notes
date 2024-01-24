import { Command } from "commander"

export function parse_args(): any {
    const program = new Command();

    program
        .name('start server')
        // .option('-p, --port <value>', 'port for hosting app',)
        .description('NodeJs express server')
        .action((port) => {
            // console.log('set port:', port);
        });

    let options = program.opts();

    return options;
}
