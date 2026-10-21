---
title: "Brain-state forecasting and EEG analysis"
summary: "Built a novel 4D Swin Transformer U-Net to forecast resting-state fMRI (published in IEEE JBHI), then an EEG preprocessing pipeline for sleep-spindle segmentation."
org: "University of Sydney \u00b7 Brain and Mind Centre \u00b7 Vacation Research Scholarships"
period: "2024 \u2013 2025"
category: Research
tags: [PyTorch, Transformers, fMRI, EEG, HPC]
cover: usyd-brain-states-cover.png
featured: true
order: 1
links:
  - { label: IEEE JBHI paper, url: "https://ieeexplore.ieee.org/document/11283638" }
gallery:
  - "56298d_18001b2727d84f229483caa3f5375146~mv2.png | Research poster: voxel-wise brain-state prediction with 4D Swin Transformers"
  - "56298d_ee5e3c0f68bf4339be1dcf960272c390~mv2.png | Vacation Research Internship certificate, summer 2024–25"
  - "56298d_ebbba6b2d24e474a9476c373133430c1~mv2.png | The original and new model architectures"
  - "56298d_0b883d7847ee47a68e9c798903a4b435~mv2.png | Predicted brain-state volumes across forecast timesteps"
  - "56298d_a1e0d383621e4a95a5f463bbc78f658a~mv2.png | The University of Sydney’s post about the scholarship"
  - "56298d_7b55e2c2352e4d849c35ac62f4625fc8~mv2.png | Centre-voxel activation over time: target and prediction"
  - "56298d_656389610e624cc5a90f1153d9bf2b14~mv2.png | Old model, target and new model, side by side"
  - "56298d_77005a150e434e3ab681d2b312af15ff~mv2.png | Iterative prediction: error grows with each predicted frame"
  - "56298d_2c405d1280514921a7eb51fce5ca95eb~mv2.png | Masked MSE per frame for each model"
  - "56298d_966ad65b7903469999868ed7d7e9946f~mv2.png | Accelerated Scholarship certificate, autumn 2025"
  - "56298d_2604489000594c2d867ae6c99590c73a~mv2.png | The published paper in IEEE JBHI"
  - "56298d_b2702bc6745c42489ca3cc756e34b694~mv2.png | The preprint on arXiv"
  - "56298d_bc40e2a10d3942f6823877b4f937ea39~mv2.png | Results figures from the paper"
  - "56298d_46b89308c90d470d970d1bd47735c1b7~mv2.png | Scholarship report: voxel-wise forecasting with 4D Swin Transformers"
  - "56298d_5f3208826e524c9c8a1f66cffcecde39~mv2.png | Contents of the scholarship report"
  - "56298d_86673dcfa8524d6ebfa239a1e29319e6~mv2.png | The 4D Swin Transformer U-Net architecture"
  - "56298d_470b30f3f4424761bbaae57e98ce013e~mv2.png | Poster: EEG signal analysis pipeline for sleep-spindle detection"
  - "56298d_bf56d76a543f480aba0f496010661a62~mv2.jpg | Presenting the sleep-spindle poster"
  - "56298d_105d5601bd604588aa9aa099b2a5db7a~mv2.png | Sleep-spindle detection literature behind the pipeline"
  - "56298d_1fb3b9d838aa4f26a3618f6dea345b33~mv2.png | Vacation Research Internship certificate, winter 2025"
---

## Project 1 — 4D Swin Transformer for rs-fMRI forecasting

*Summer 2024–25 · $4,000 AUD scholarship*

Supervised by Prof Fernando Calamante and Prof Jinglei Lv at the Brain and Mind Centre, working with Yifei Sun, I helped improve an autoencoder-style model that forecasts resting-state brain activity from 4D fMRI. It takes 32 consecutive fMRI volumes (23 seconds of scan) and predicts the next 10 (7.2 seconds).

**Outcome**

- Developed a novel 4D Swin Transformer U-Net; the published model predicts the next 10 brain states with a masked MSE of 0.035 and an SSIM of 0.954 on held-out test subjects.
- Improved performance through skip connections, refined patching and autoencoder optimisations.
- Trained models on the Brain and Mind Centre's NVIDIA DGX server (4× V100), with data on USYD's Research Data Store.
- Led weekly research discussions and became second author on the resulting publication.

## Project 1 extension — longer, more stable forecasts

*Autumn 2025 · $1,500 AUD scholarship extension*

- Added new preprocessing and autoregressive prediction methods to the training pipeline, extending stable forecasts from 10 to as many as 200 frames.
- Implemented a combined SSIM and masked-MSE loss to keep long forecasts structurally faithful.
- Validated every model and prediction configuration for the publication on remote Linux HPC clusters (DGX, 4× A100).
- The paper was posted to arXiv, accepted to a special issue of **IEEE JBHI** and presented at **IEEE BHI 2025**.

## Project 2 — EEG preprocessing for sleep-spindle segmentation

*Winter 2025 · $3,000 AUD scholarship*

With Prof Wei Chen, Dr Jia Liu and Dr Shawn Dexiao Kong, I built a robust EEG preprocessing pipeline to support AI-based sleep-spindle segmentation. Spindles are brief, subtle 11–16 Hz oscillations (about 0.5–2 seconds) that appear across multiple channels. In recordings up to 10 hours long they make up less than 0.5% of the signal, so the classes are extremely imbalanced.

**Outcome**

- Adapted state-of-the-art preprocessing from the literature, using wavelet-transform frequency-domain features to improve spindle localisation.
- Validated threshold-based detections against the ground-truth spindle annotations.
- Built preliminary Swin Transformer and convolutional U-Net models for downstream segmentation before handing the pipeline over to the lab.
