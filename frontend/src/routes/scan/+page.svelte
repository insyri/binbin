<script>
  import { OCRClient } from "tesseract-wasm";
  import tesseractWorker from "$lib/tesseract-worker?url";
  import tesseractWasmBinary from "$lib/tesseract-core.wasm?raw";
  import trainedData from "$lib/eng.traineddata?raw";
  import { onDestroy, onMount } from "svelte";
  import Switch from "./Switch.svelte";

  /**
   * @type {number}
   */
  let interval;
  let countdown = 5;
  let scannerEnabled = false;
  /**
   * @type {HTMLVideoElement}
   */
  let videoEl;
  /**
   * @type {string}
   */
  let errorMessage;
  let imageCapture;

  function startCountdown() {
    countdown = 5;
    interval = setInterval(() => {
      if (scannerEnabled) {
        countdown--;
        if (countdown === 0) {
          countdown = 5;
          grabFrame();
        }
      }
    }, 1000);
  }

  /**
   * @param event {CustomEvent}
   */
  function handleToggle(event) {
    scannerEnabled = event.detail.isEnabled;
    if (scannerEnabled) countdown = 5;
  }

  function grabFrame() {
    imageCapture
      .grabFrame()
      .then(async (imageBitmap) => {
        const ocr = new OCRClient({
          workerURL: tesseractWorker,
          wasmBinary: tesseractWasmBinary,
        });
        const data = trainedData;
        await ocr.loadModel(data.arrayBuffer());

        await ocr.loadImage(imageBitmap);
        const text = await ocr.getText();

        console.log("OCR text: ", text);

        ///
        const canvas = document.getElementById("grabFrameCanvas");
        if (canvas) {
          drawCanvas(canvas, imageBitmap);
        } else {
          console.error("Canvas element not found");
        }
      })
      .catch((error) => {
        console.error("Error grabbing frame: ", error);
      });
  }

  function drawCanvas(canvas, img) {
    canvas.width = parseInt(getComputedStyle(canvas).width, 10);
    canvas.height = parseInt(getComputedStyle(canvas).height, 10);
    let ratio = Math.min(canvas.width / img.width, canvas.height / img.height);
    let x = (canvas.width - img.width * ratio) / 2;
    let y = (canvas.height - img.height * ratio) / 2;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      x,
      y,
      img.width * ratio,
      img.height * ratio
    );
  }

  onMount(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoEl.srcObject = stream;
      videoEl.play();

      const track = stream.getVideoTracks()[0];
      imageCapture = new ImageCapture(track);
      startCountdown();
    } catch (e) {
      console.error(e);
      errorMessage = "Camera Access Denied.";
    }
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<svelte:head>
  <title>binbin | Scan</title>
  <meta name="description" content="Scan new IDs" />
</svelte:head>

<div class="text-column">
  <h1>Register New Student ID Cards</h1>
  <h2>Make sure the camera is connected and allowed on your browser.</h2>

  <!-- svelte-ignore a11y-media-has-caption -->
  <video bind:this={videoEl} />
  <Switch bind:isEnabled={scannerEnabled} on:toggle={handleToggle} />
  {#if scannerEnabled}
    <p>Next scan in {countdown}</p>
    <canvas
      id="grabFrameCanvas"
      width="200"
      height="100"
      style="border:1px solid #000000;"
    ></canvas>
  {/if}

  {#if errorMessage}
    <h2>{errorMessage}</h2>
  {/if}
</div>

<style>
  /* video {
    background-color: gray;
  } */
</style>
