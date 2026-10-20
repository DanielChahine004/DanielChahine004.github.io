---
title: "Brain-state forecasting & EEG analysis \u2014 USYD Vacation Research Scholarships"
summary: "Built a novel 4D Swin Transformer U-Net to forecast resting-state fMRI (published in IEEE JBHI), then an EEG preprocessing pipeline for sleep-spindle segmentation."
org: "University of Sydney \u00b7 Brain and Mind Centre"
period: "2024 \u2013 2025"
category: Research
tags: [PyTorch, Transformers, fMRI, EEG, HPC]
cover: 56298d_18001b2727d84f229483caa3f5375146~mv2.png
featured: true
order: 1
links:
  - { label: IEEE JBHI paper, url: "https://ieeexplore.ieee.org/document/11283638" }
gallery:
  - 56298d_ee5e3c0f68bf4339be1dcf960272c390~mv2.png
  - 56298d_ebbba6b2d24e474a9476c373133430c1~mv2.png
  - 56298d_0b883d7847ee47a68e9c798903a4b435~mv2.png
  - 56298d_a1e0d383621e4a95a5f463bbc78f658a~mv2.png
  - 56298d_7b55e2c2352e4d849c35ac62f4625fc8~mv2.png
  - 56298d_656389610e624cc5a90f1153d9bf2b14~mv2.png
  - 56298d_77005a150e434e3ab681d2b312af15ff~mv2.png
  - 56298d_2c405d1280514921a7eb51fce5ca95eb~mv2.png
  - 56298d_966ad65b7903469999868ed7d7e9946f~mv2.png
  - 56298d_2604489000594c2d867ae6c99590c73a~mv2.png
  - 56298d_b2702bc6745c42489ca3cc756e34b694~mv2.png
  - 56298d_bc40e2a10d3942f6823877b4f937ea39~mv2.png
  - 56298d_46b89308c90d470d970d1bd47735c1b7~mv2.png
  - 56298d_5f3208826e524c9c8a1f66cffcecde39~mv2.png
  - 56298d_86673dcfa8524d6ebfa239a1e29319e6~mv2.png
  - 56298d_470b30f3f4424761bbaae57e98ce013e~mv2.png
  - 56298d_bf56d76a543f480aba0f496010661a62~mv2.jpg
  - 56298d_105d5601bd604588aa9aa099b2a5db7a~mv2.png
  - 56298d_1fb3b9d838aa4f26a3618f6dea345b33~mv2.png
---

## Project 1 — 4D Swin Transformer for rs-fMRI forecasting

*Summer 2024–25 · $4,000 AUD scholarship*

I joined researchers at the Brain and Mind Centre to improve an autoencoder-style model that forecasts 4D resting-state fMRI brain states, supervised by Yifei Sun and Prof Jinglei Lv. The model takes 32 consecutive 3D fMRI volumes (23 seconds of scan) and predicts the next 10 (7.2 seconds).

**Outcome**

- Coded a novel 4D Swin Transformer U-Net. The published model predicts the next 10 brain states with a masked MSE of 0.035 and an SSIM of 0.954 on held-out test subjects.
- Improved performance through skip connections, refined patching and autoencoder optimisations.
- Trained using USYD's Research Data Store and the Brain and Mind Centre's NVIDIA DGX server (4× V100).
- Led weekly research discussions; second author on the resulting publication.

## Project 1 extension

*Autumn 2025 · $1,500 AUD*

- Extended the training pipeline with new preprocessing and autoregressive prediction methods, improving forecast stability from 10 to as many as 200 frames.
- Implemented a combined SSIM and masked-MSE loss, cutting loss by a further 50%.
- Validated all models and prediction configurations for publication on remote Linux HPC clusters (DGX, 4× A100).
- The preprint was posted to arXiv, accepted to a special issue of **IEEE JBHI** and presented at **IEEE BHI 2025**.

## Project 2 — EEG preprocessing for sleep-spindle segmentation

*Winter 2025 · $3,000 AUD*

With Prof Wei Chen, Dr Jia Liu and Dr Shawn Dexiao Kong, I built a robust EEG preprocessing pipeline to support AI-based sleep-spindle segmentation. Spindles are subtle 11–16 Hz oscillations lasting about half a second to two seconds across multiple channels, so the class imbalance is extreme (<0.5% positive) over recordings up to 10 hours long.

**Outcome**

- Adapted state-of-the-art preprocessing from the literature, using wavelet-transform frequency-domain features to improve spindle localisation.
- Reached up to 96% segmentation overlap via thresholding.
- Built preliminary Swin Transformer and convolutional U-Net models for downstream segmentation, then handed the pipeline over to the lab.
