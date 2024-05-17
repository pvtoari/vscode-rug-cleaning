import * as vscode from "vscode";

const url = "https://yewtu.be/latest_version?id=HDp6r4dCedw";

const getRandomInstant = () => {
	return url+"#t="+Math.random()*25200 + 100;
};


const getWebviewContent = (url: string) => `
	<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />

			<style>
				body {
					height: 100vh;
					display: grid;
					overflow: hidden;
					place-items: center;
				}

				video {
					transform: scale(3);
					clip-path: polygon(
						33.33% 0%,
						66.67% 0%,
						66.67% 100%,
						33.33% 100%
					);
				}
			</style>
		</head>
		<body>
			<video autoplay muted>
				<source src="${url}" />
			</video>
		</body>
	</html>
`;

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand(
		"rug-cleaning.relax",
		() => {
			const panel = vscode.window.createWebviewPanel(
				"rug-cleaning.video",
				"Epic Rug Cleaning Video",
				{ viewColumn: vscode.ViewColumn.Beside, preserveFocus: true },
				{ enableScripts: true }
			);

			const randomUrl = getRandomInstant();
			panel.webview.html = getWebviewContent(randomUrl);
		}
	);

	context.subscriptions.push(disposable);
}

export function deactivate() {}
