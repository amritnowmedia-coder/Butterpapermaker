document.addEventListener("DOMContentLoaded", () => {
  const generator = new PatternGenerator(3600);
  const canvas = document.getElementById("previewCanvas");
  const stage = document.getElementById("canvasStage");
  const renderer = new CanvasRenderer(canvas, stage, generator);
  let ui;
  const assetManager = new AssetManager(() => ui?.refresh());
  const downloadManager = new DownloadManager(
    renderer,
    () => assetManager.assets,
    () => ui.getSettings()
  );
  ui = new UIController(assetManager, renderer, downloadManager, generator);
  ui.init();
});
