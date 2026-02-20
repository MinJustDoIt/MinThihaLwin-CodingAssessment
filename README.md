# Technical Assessment

This assessment is designed to emulate a day in the life of a Software Engineer.
You will be assessed on how well you follow instructions and express the intent
of your changes using the tools at hand. It's purpose is not to trick you or
catch you out but to get an understanding of how you think about solving
problems guided by software engineering principles while capturing learnings and
intent using the capabilities and tools at your disposal.

It is up to you to manage your time. We do not expect you to finish all of it. 
So ensure you spend your time on areas that showcase your skills. The answers 
will be assessed against the role you have applied for so ensure you demonstrate 
the key skills and responsibilities expected by the role.

**Commit** to the local git repo **often** to show progress and flow. Ensure
you capture the **why**, **what** and **how** of your changes.

Don't forget to checkout the [appendix](docs/Assessment.md#appendix) for some great tools, hints
and tips.

## Getting started

This assessment can be completed in any of the following technology stacks:

- [C#](./csharp)
- [Java](./java)
- [JavaScript](./javascript)
- [Python](./python)
- [Ruby](./ruby)
- [TypeScript](./typescript)

We reccomend you use the  
[development containers](https://code.visualstudio.com/docs/remote/containers-tutorial).
Another option is to push the repo to a private github repository and use the built in
[code spaces](https://github.com/features/codespaces) feature. Or you can run it
on your own hardware, just follow the README.md in each of the
technology stack directories for a full list of dependencies.

### To open the workspace in a development container

- [C#](./csharp/.devcontainer/devcontainer.json)
  To open the workspace run `code csharp` 
- [Java](./java/.devcontainer/devcontainer.json)
  To open the workspace run `code java`
- [JavaScript](./javascript/.devcontainer/devcontainer.json)
  To open the workspace run `code javascript`
- [Python](./python/.devcontainer/devcontainer.json)
  To open the workspace `code python`
- [Ruby](./ruby/.devcontainer/devcontainer.json)
  To open the workspace run `code ruby`
- [typescript](./typescript/.devcontainer/devcontainer.json)
  To open the workspace run `code typescript`

Once this workspace has re-opened in the dev container follow the quick start 
guide in the local README.md.

## Submitting

To submit your solution:

1. Ensure you have committed all your changes Include a brief summary with:
   - What you would do next if given more time
1. Run `git clean -xdf` to clear out any build artifacts
   - > ⚠ **Binary files** in the submission will **blocked** the submission.
1. Compress the solution source into a single archive
   - > ⚠ Ensure the **.git** folder and **other hidden** files are **included**
     > in the archive
1. Attach the zip file as evidence to your application.
1. Test to ensure the archive contains all and only the files you expect.

If using the development container:

1. Open the [terminal](command:workbench.action.terminal.new).
1. Run:
   ```sh
   git clean -xdf
   mkdir pickup -p
   zip -r pickup/CodingAssessment.zip .
   ```
1. Attach the zip file as evidence to your application.

All the best with your [assessment](docs/Assessment.md), we look forward to
seeing what you can do!