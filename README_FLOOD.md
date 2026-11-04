# Bangladesh Flood Predictor v3 — Leakage-Audited Physics-Guided ML

> **This repository contains ongoing research.** The v3 framework implements honest evaluation methodology: temporal splits, spatial cross-validation, statistical testing, calibration, and conformal uncertainty quantification. The earlier v1/v2 results (0.996 AUC under random split) were overfitted — see [Leakage Audit](#leakage-audit) below.

## Research Question

Can machine learning models for flood prediction be made **scientifically trustworthy** — not just more accurate — by incorporating physical knowledge about flood dynamics?

## v3 Key Results

| Model | Configuration | AUC (Temporal Split) | Monotonic Constraints |
|-------|--------------|---------------------|----------------------|
| LightGBM | Unconstrained (random split) | 0.9965 ❌ Overfitted | 0/11 |
| Physics-Guided LightGBM | +11 monotonic constraints | 0.8889 | 11/11 ✓ |
| CatBoost | Unconstrained (random split) | 0.9962 ❌ Overfitted | 0/11 |
| **Physics-Guided CatBoost** | **+11 monotonic constraints** | **0.9848** ✅ | **11/11 ✓** |
| XGBoost | Unconstrained (random split) | 0.9962 ❌ Overfitted | 0/11 |
| Physics-Guided XGBoost | +11 monotonic constraints | 0.9847 | 11/11 ✓ |

**Gap to unconstrained CatBoost: only 0.0114 AUC while maintaining 100% physical consistency.**

## Leakage Audit (Why v1/v2 Results Were Inflated)

The original dataset has strong **temporal autocorrelation** and **spatial structure**. A random 80/20 split lets the model see near-future observations and same-station data during training.

- **v1/v2**: Random split → LightGBM 0.9965 AUC (looks impressive, but is memorization)
- **v3**: Temporal split (train ≤2000, test 2001–2013) + Station-Out CV → Honest AUC range 0.88–0.98

This is the **single most impactful change** — it separates memorization from genuine generalization.

## v3 Honest Evaluation Stack

1. **Temporal Split**: Train 1980–2000 (21 years), Test 2001–2013 (13 years). No temporal leakage.
2. **Station-Out Spatial CV**: Hold out entire stations (all years) to test spatial transferability.
3. **Five-Model Ablation (M1–M5)**: Systematic feature removal across LightGBM, CatBoost, XGBoost ± constraints.
4. **Monotonic Constraints**: 11 directional constraints from hydrological first principles (rainfall↑→risk↑, elevation↑→risk↓, etc.)
5. **Calibration & UQ**: Brier score + decomposition, Expected Calibration Error (ECE), reliability diagrams, conformal prediction (90% marginal coverage), label-flip sensitivity.
6. **Statistical Rigor**: DeLong tests with 10,000 bootstrap iterations for AUC comparison CIs.
7. **Attribution**: SHAP (TreeSHAP) for global + local feature importance.
8. **Spatial Diagnostics**: Moran's I on residuals (no spatial clustering = good).
9. **External Validation**: WorldClim reanalysis correlation r ≈ 0.989 validates spatial risk features against independent data.

## Repository Structure (v3 — In Progress)

```
src/floodml/          # Reproducible package (target)
├── data/             # Data loading & preprocessing
├── features/         # Feature engineering (GeoPandas spatial, seasonal)
├── models/           # Model training with monotonic constraints
├── evaluation/       # Temporal/Station-Out splits, calibration, conformal
├── stats/            # DeLong, bootstrap, SHAP, Moran's I
└── cli.py            # One-command reproduction
requirements.txt
reproduce.sh          # Run full v3 pipeline
```

## Quick Start (v2 — Current Stable)

```bash
# Install dependencies
pip install -r requirements.txt

# Run v2 notebook (physics-guided constraints, random split)
jupyter notebook Bangladesh_Flood_Predictor_v2.ipynb
```

## v3 Target (In Progress)

- [ ] Package as `src/floodml` with tests & `requirements.txt`
- [ ] One-command reproduction script
- [ ] Preprint on arXiv with Zenodo DOI
- [ ] Sentinel-1 flood segmentation (Sylhet 2022)
- [ ] Transformer/FNO vs LSTM comparison
- [ ] Theory note: 5 proof-based problems + 1 SGD experiment

## Citation

If you use this dataset or repository, please cite the original data authors:

```bibtex
@inproceedings{gauhar2021prediction,
  title={Prediction of Flood in Bangladesh using k-Nearest Neighbors Algorithm},
  author={Gauhar, Noushin and Das, Sunanda and Moury, Khadiza Sarwar},
  booktitle={2021 2nd International Conference on Robotics, Electrical and Signal Processing Techniques (ICREST)},
  pages={357--361},
  year={2021},
  organization={IEEE},
  doi={10.1109/ICREST51555.2021.9331123}
}
```

## Important Notes

- **These are experimental observations**, not universally validated scientific claims
- **Work in progress** — requires further validation, particularly temporal generalization
- The portfolio site previously claimed "0.98+ AUC, Ready for early-warning systems" — this was based on v1/v2 random-split results and **is not honest**. See the [Research page](https://riyadh5674.github.io/research) for the full evolution v1→v2→v3.
- The core contribution is **methodological**: demonstrating that evaluation design (temporal/spatial splits, statistical testing, calibration) is as important as model design.

## Links

- **Portfolio Research Page**: https://riyadh5674.github.io/research
- **Project Detail**: https://riyadh5674.github.io/projects/bangladesh-flood-predictor
- **Author**: MD Riyad (riyadhmia999@gmail.com)

---

**Last Updated**: November 2026  
**Version**: v3 (leakage-audited, honest evaluation)  
**Status**: Ongoing research → targeting publication