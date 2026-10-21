---
title: "Continuous-coordinate image reconstruction for monolithic PET — Honours thesis"
summary: "Built a GPU-accelerated list-mode OSEM pipeline that reconstructs PET images straight from continuous gamma-interaction coordinates, skipping the sinogram binning that throws resolution away."
org: "University of Technology Sydney · Honours capstone"
category: Research
tags: [Image reconstruction, CUDA, Python, PET, OSEM]
cover: pet-recon-cover.png
featured: true
order: 0
gallery:
  - "pet-recon-nema-osem.png | OSEM reconstruction of a NEMA IEC phantom: ground-truth LORs (left) and network-predicted LORs (right)"
  - "pet-recon-nema-ubp.png | The same phantom with unfiltered backprojection, for comparison"
  - "pet-recon-sinograms.png | Sinograms of a point source from ground-truth and predicted LORs"
---

Monolithic scintillator detectors can place each gamma-ray interaction at a continuous 3D position, including its depth in the crystal. Standard PET reconstruction software (STIR, CASToR, PyTomography) still bins those events onto a discrete sinogram first, which caps the resolution no matter how well the events were localised.

My Honours thesis removed that step: a reconstruction pipeline that works on the raw coordinates of every line of response (LOR), from start to finish.

## What I built

- **List-mode OSEM on continuous coordinates.** The system matrix is computed on the fly with Siddon ray tracing along each LOR, so the pipeline doesn't depend on the scanner's geometry. The same code can serve planar, cylindrical or fully enclosed monolithic scanners.
- **Corrections in the forward model.** Attenuation, sensitivity and single-scatter simulation (SSS) are built into the iterative update.
- **CUDA kernels for every projection.** One GPU thread traces each LOR, so tens of millions of events take seconds per subset iteration.
- **Unfiltered backprojection** as a baseline, with 256³ images at 1 mm voxels.

## How I tested it

I simulated 25 point sources across the field of view of a monolithic annular scanner and a NEMA IEC body phantom. Each was reconstructed twice: from ground-truth LORs and from LORs predicted by a neural network localiser working from the simulated scintillation light.

## Results

- **Point sources land where they should.** Point sources across the field of view were reconstructed in the right place from both ground-truth and predicted LORs. Because the pipeline uses each coordinate as given, a better localiser translates directly into sharper images.
- **Extended objects work.** OSEM reconstructions of the NEMA IEC phantom placed every hot sphere correctly, with clearly better contrast than backprojection.

The thesis recommends continuous-coordinate list-mode OSEM as the reconstruction standard for future monolithic PET systems, the detectors my PhD now focuses on.
