<script>
//* -------------------------------------------------------------------------- */
//*                                   SCRIPT                                   */
//* -------------------------------------------------------------------------- */
const { ipcRenderer } = require('electron')

export default {
	name: 'titlebar',
	//* ---------------------------------- DATA ---------------------------------- */
	data: function() {
		return {
			status: 'normal',
		}
	},
	//* --------------------------------- METHODS -------------------------------- */
	methods: {
		winClose: function() {
			ipcRenderer.send('winClose')
		},
	},
	//* -------------------------------- COMPUTED -------------------------------- */
	//_ computed: {
	//_ 	winStatus() {
	//_ 		return this.$store.getters.finishedGame.finished
	//_ 	},
	//_ },
}
</script>

<template>
	<div id="titlebar" :style="{ width: this.winWidth }">
		<div id="drag-region">
			<div id="window-icon">
				<img src="../../../main/icons/SB_Icon-GPF1.svg" alt="App icon" />
			</div>
			<div id="window-title">
				<span>CADsichter v0.1</span>
			</div>

			<div id="window-controls">
				<div class="button" id="min-button" @click="this.SET_MINIMIZED()">
					<img
						class="icon"
						src="../../assets/img/titlebar/icon_minimize.svg"
						draggable="false"
					/>
				</div>
				<div
					class="button"
					id="max-button"
					v-if="status === 'normal'"
					@click="this.SET_MAXIMIZED()"
				>
					<img
						class="icon"
						src="../../assets/img/titlebar/icon_maximize.svg"
						draggable="false"
					/>
				</div>
				<div
					class="button"
					id="restore-button"
					v-if="status === 'maximized'"
					@click="this.SET_RESTORED()"
				>
					<img
						class="icon"
						src="../../assets/img/titlebar/icon_restore.svg"
						draggable="false"
					/>
				</div>
				<div class="button" id="close-button" @click="winClose()">
					<img
						class="icon"
						src="../../assets/img/titlebar/icon_close.svg"
						draggable="false"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/index';

#titlebar {
	// display: block;
	// position: absolute;
	// top: 0;
	// left: 0;
	height: $h_title;
	width: 100vw;
	margin: auto;
	margin-right: 0px;
	// width: calc(100% - 2px);
	color: $color_l5;
	background-color: $bg_wintitle;
	grid-area: 1 / 1 / last-line / last-row;
	// grid-row: 1;
	//_ width: calc(100% - 2px);
	//_ padding: 4px;

	.maximized {
		width: 100vw;
		padding: 0;
	}
	.minimized {
		width: 100vw;
		padding: 0;
	}
	.restored {
		width: 100vw;
		padding: 0;
	}
	#drag-region {
		width: 100%;
		height: 100%;
		-webkit-app-region: drag;
		display: grid;
		grid-template-columns: 32px auto 138px;
	}

	// #main {
	// 	height: calc(100% - 32px);
	// 	margin-top: 32px;
	// 	padding: 20px;
	// 	overflow-y: auto;
	// }

	#window-icon {
		grid-column: 1;
		display: flex;
		align-items: center;
		// margin-left: 8px;
		margin: auto;
		overflow: hidden;

		img {
			height: 24px;
		}
	}

	#window-title {
		grid-column: 2;
		display: grid;
		align-items: center;
		// margin-left: 8px;
		margin: 0px 10px;
		overflow: hidden;
		font-size: 16px;

		.maximized {
			margin-left: 12px;
		}

		span {
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			line-height: 1.5;
			place-self: center center;
			//_ font-weight: 800;
		}
	}
	#window-controls {
		display: grid;
		grid-template-columns: repeat(3, 46px);
		position: fixed;
		top: 0;
		right: 0;
		height: $h_title;
		-webkit-app-region: no-drag;

		.button {
			grid-row: 1 / span 1;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 100%;
			user-select: none;

			&:hover {
				background: rgba(255, 255, 255, 0.2);
			}
			&:active {
				background: rgba(255, 255, 255, 0.4);
			}
		}
	}

	#close-button {
		&:hover {
			background: #e81123 !important;
		}

		&:active {
			background: #f1707a !important;

			.icon {
				filter: invert(1);
			}
		}
	}

	#min-button {
		grid-column: 1;
	}
	#max-button,
	#restore-button {
		grid-column: 2;
	}
	#close-button {
		grid-column: 3;
	}
}

@media (-webkit-device-pixel-ratio: 1.5),
	(device-pixel-ratio: 1.5),
	(-webkit-device-pixel-ratio: 2),
	(device-pixel-ratio: 2),
	(-webkit-device-pixel-ratio: 3),
	(device-pixel-ratio: 3) {
	#window-controls .icon {
		width: 10px;
		height: 10px;
	}
}
</style>
