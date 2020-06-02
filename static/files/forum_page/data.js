﻿/*
$axure.loadCurrentPage(
    (function () {
        var _ = function () {
            var r = {}, a = arguments;
            for (var i = 0; i < a.length; i += 2) r[a[i]] = a[i + 1];
            return r;
        }
        var _creator = function () {
            return _(b, c, d, e, f, _(g, h, i, _(j, k, l, m)), n, [], o, _(p, q), r, [s], t, _(u, v, w, x, g, y, z, _(), A, [_(B, C, D, E, F, G, H, I)], J, _(K, L, M, N, O, _(P, Q, R, S), T, null, U, V, V, W, X, Y, null, Z, ba, bb, bc, bd, be, bf, ba, bg, bh, _(P, Q, R, bi), bj, ba, bk, bl, _(bm, bn, bo, bp, bq, bp, br, bp, R, _(bs, bt, bu, bt, bv, bt, bw, bx)), i, _(j, by, l, m)), bz, _(), bA, _(), bB, _(bC, [_(bD, bE, F, p, bF, bG, w, bH, bI, bH, bJ, bK, J, _(i, _(j, k, l, bL)), bz, _(), bM, _(), bN, bO), _(bD, bP, F, p, bF, bQ, w, bR, bI, bR, bJ, bK, J, _(i, _(j, bS, l, bT), K, bU, bV, _(bW, bX, bY, bZ)), bz, _(), bM, _(), ca, bn), _(bD, cb, F, p, bF, bQ, w, bR, bI, bR, bJ, bK, J, _(i, _(j, bS, l, cc), K, cd, bV, _(bW, bX, bY, bZ)), bz, _(), bM, _(), ca, bn), _(bD, ce, F, p, bF, cf, w, cg, bI, cg, bJ, bK, J, _(), bz, _(), bM, _(), bA, _(ch, _(ci, cj, ck, cl, cm, [_(ck, p, cn, p, co, bn, cp, cq, cr, [_(cs, ct, ck, cu, cv, cw, cx, _(cy, _(p, cu)), cz, _(cA, t, b, cB, cC, bK), cD, cE)])])), cF, bK, cG, [_(bD, cH, F, p, bF, bQ, w, bR, bI, bR, bJ, bK, J, _(i, _(j, cI, l, cJ), K, cK, bV, _(bW, cL, bY, cM), cN, _(cO, _(O, _(P, Q, R, cP)))), bz, _(), bM, _(), ca, bn), _(bD, cQ, F, p, bF, bQ, w, bR, bI, bR, bJ, bK, J, _(bd, cR, cS, cT, i, _(j, cU, l, cV), K, cW, bV, _(bW, cX, bY, cY), cZ, da), bz, _(), bM, _(), ca, bn), _(bD, db, F, p, bF, bQ, w, bR, bI, bR, bJ, bK, J, _(i, _(j, dc, l, cc), K, dd, bV, _(bW, de, bY, df), cZ, dg), bz, _(), bM, _(), ca, bn), _(bD, dh, F, p, bF, bQ, w, bR, bI, bR, bJ, bK, J, _(bd, cR, cS, cT, i, _(j, di, l, cV), K, cW, bV, _(bW, dj, bY, cY), cZ, da), bz, _(), bM, _(), ca, bn), _(bD, dk, F, p, bF, bQ, w, bR, bI, bR, bJ, bK, J, _(bd, cR, cS, cT, i, _(j, dl, l, cV), K, cW, bV, _(bW, dm, bY, cY), cZ, da), bz, _(), bM, _(), ca, bn), _(bD, dn, F, p, bF, bQ, w, bR, bI, bR, bJ, bK, J, _(bd, cR, cS, cT, i, _(j, dp, l, cV), K, cW, bV, _(bW, dq, bY, cY), cZ, da), bz, _(), bM, _(), ca, bn)], dr, bn), _(bD, ds, F, p, bF, bQ, w, bR, bI, bR, bJ, bK, J, _(bd, cR, cS, cT, i, _(j, dt, l, du), K, cW, bV, _(bW, bX, bY, dv), cZ, dw), bz, _(), bM, _(), ca, bn), _(bD, dx, F, p, bF, dy, w, dz, bI, dz, bJ, bK, J, _(bd, cR, cS, cT, i, _(j, dA, l, dB), cN, _(dC, _(K, dD), dE, _(K, dF)), K, dG, bV, _(bW, cL, bY, dH)), dI, bn, bz, _(), bM, _(), dJ, dK), _(bD, dL, F, p, bF, dM, w, bR, bI, bR, bJ, bK, J, _(bd, cR, cS, cT, dN, _(P, Q, R, S, dO, dP), i, _(j, dQ, l, dR), K, dS, bV, _(bW, dT, bY, dH), O, _(P, Q, R, dU), cN, _(cO, _(O, _(P, Q, R, dV)))), bz, _(), bM, _(), dW, _(dX, dY, dZ, ea), ca, bn), _(bD, eb, F, ec, bF, dM, w, bR, bI, bR, bJ, bK, J, _(bd, cR, cS, cT, dN, _(P, Q, R, ed, dO, dP), i, _(j, dQ, l, dR), K, dS, bV, _(bW, ee, bY, dH), O, _(P, Q, R, ef), cN, _(cO, _(O, _(P, Q, R, dV)))), bz, _(), bM, _(), bA, _(ch, _(ci, cj, ck, cl, cm, [_(ck, p, cn, p, co, bn, cp, cq, cr, [_(cs, eg, ck, eh, cv, ei, cx, _(ej, _(ek, eh)), el, [_(em, [en], eo, _(ep, eq, er, _(es, et, eu, ev, ew, ex, ey, ez, eA, ev, eB, ex, eC, ev, eD, bn)))])])])), cF, bK, dW, _(dX, eE, dZ, ea), ca, bn), _(bD, eF, F, p, bF, cf, w, cg, bI, cg, bJ, bK, J, _(bV, _(bW, eG, bY, eH)), bz, _(), bM, _(), bA, _(ch, _(ci, cj, ck, cl, cm, [_(ck, p, cn, p, co, bn, cp, cq, cr, [_(cs, ct, ck, cu, cv, cw, cx, _(cy, _(p, cu)), cz, _(cA, t, b, cB, cC, bK), cD, cE)])])), cF, bK, cG, [_(bD, eI, F, p, bF, bQ, w, bR, bI, bR, bJ, bK, J, _(i, _(j, cI, l, cJ), K, cK, bV, _(bW, cL, bY, eJ), cN, _(cO, _(O, _(P, Q, R, cP)))), bz, _(), bM, _(), ca, bn), _(bD, eK, F, p, bF, bQ, w, bR, bI, bR, bJ, bK, J, _(bd, cR, cS, cT, i, _(j, eL, l, cV), K, cW, bV, _(bW, cX, bY, eM), cZ, da), bz, _(), bM, _(), ca, bn), _(bD, eN, F, p, bF, bQ, w, bR, bI, bR, bJ, bK, J, _(i, _(j, dc, l, cc), K, dd, bV, _(bW, de, bY, eO), cZ, dg), bz, _(), bM, _(), ca, bn), _(bD, eP, F, p, bF, bQ, w, bR, bI, bR, bJ, bK, J, _(bd, cR, cS, cT, i, _(j, di, l, cV), K, cW, bV, _(bW, dj, bY, eM), cZ, da), bz, _(), bM, _(), ca, bn), _(bD, eQ, F, p, bF, bQ, w, bR, bI, bR, bJ, bK, J, _(bd, cR, cS, cT, i, _(j, eR, l, cV), K, cW, bV, _(bW, dm, bY, eM), cZ, da), bz, _(), bM, _(), ca, bn), _(bD, eS, F, p, bF, bQ, w, bR, bI, bR, bJ, bK, J, _(bd, cR, cS, cT, i, _(j, eT, l, cV), K, cW, bV, _(bW, dq, bY, eM), cZ, da), bz, _(), bM, _(), ca, bn)], dr, bn), _(bD, eU, F, p, bF, cf, w, cg, bI, cg, bJ, bK, J, _(bV, _(bW, eV, bY, eW)), bz, _(), bM, _(), bA, _(ch, _(ci, cj, ck, cl, cm, [_(ck, p, cn, p, co, bn, cp, cq, cr, [_(cs, ct, ck, cu, cv, cw, cx, _(cy, _(p, cu)), cz, _(cA, t, b, cB, cC, bK), cD, cE)])])), cF, bK, cG, [_(bD, eX, F, p, bF, bQ, w, bR, bI, bR, bJ, bK, J, _(i, _(j, cI, l, cJ), K, cK, bV, _(bW, cL, bY, eY), cN, _(cO, _(O, _(P, Q, R, cP)))), bz, _(), bM, _(), ca, bn), _(bD, eZ, F, p, bF, bQ, w, bR, bI, bR, bJ, bK, J, _(bd, cR, cS, cT, i, _(j, eL, l, cV), K, cW, bV, _(bW, cX, bY, fa), cZ, da), bz, _(), bM, _(), ca, bn), _(bD, fb, F, p, bF, bQ, w, bR, bI, bR, bJ, bK, J, _(i, _(j, dc, l, cc), K, dd, bV, _(bW, de, bY, fc), cZ, dg), bz, _(), bM, _(), ca, bn), _(bD, fd, F, p, bF, bQ, w, bR, bI, bR, bJ, bK, J, _(bd, cR, cS, cT, i, _(j, di, l, cV), K, cW, bV, _(bW, dj, bY, fa), cZ, da), bz, _(), bM, _(), ca, bn), _(bD, fe, F, p, bF, bQ, w, bR, bI, bR, bJ, bK, J, _(bd, cR, cS, cT, i, _(j, di, l, cV), K, cW, bV, _(bW, dm, bY, fa), cZ, da), bz, _(), bM, _(), ca, bn), _(bD, ff, F, p, bF, bQ, w, bR, bI, bR, bJ, bK, J, _(bd, cR, cS, cT, i, _(j, eR, l, cV), K, cW, bV, _(bW, dq, bY, fa), cZ, da), bz, _(), bM, _(), ca, bn)], dr, bn), _(bD, fg, F, p, bF, cf, w, cg, bI, cg, bJ, bK, J, _(bV, _(bW, fh, bY, fi)), bz, _(), bM, _(), bA, _(ch, _(ci, cj, ck, cl, cm, [_(ck, p, cn, p, co, bn, cp, cq, cr, [_(cs, ct, ck, cu, cv, cw, cx, _(cy, _(p, cu)), cz, _(cA, t, b, cB, cC, bK), cD, cE)])])), cF, bK, cG, [_(bD, fj, F, p, bF, bQ, w, bR, bI, bR, bJ, bK, J, _(i, _(j, cI, l, cJ), K, cK, bV, _(bW, cL, bY, fk), cN, _(cO, _(O, _(P, Q, R, cP)))), bz, _(), bM, _(), ca, bn), _(bD, fl, F, p, bF, bQ, w, bR, bI, bR, bJ, bK, J, _(bd, cR, cS, cT, i, _(j, fm, l, cV), K, cW, bV, _(bW, cX, bY, fn), cZ, da), bz, _(), bM, _(), ca, bn), _(bD, fo, F, p, bF, bQ, w, bR, bI, bR, bJ, bK, J, _(i, _(j, dc, l, cc), K, dd, bV, _(bW, de, bY, fp), cZ, dg), bz, _(), bM, _(), ca, bn), _(bD, fq, F, p, bF, bQ, w, bR, bI, bR, bJ, bK, J, _(bd, cR, cS, cT, i, _(j, fr, l, cV), K, cW, bV, _(bW, dj, bY, fn), cZ, da), bz, _(), bM, _(), ca, bn), _(bD, fs, F, p, bF, bQ, w, bR, bI, bR, bJ, bK, J, _(bd, cR, cS, cT, i, _(j, di, l, cV), K, cW, bV, _(bW, dm, bY, fn), cZ, da), bz, _(), bM, _(), ca, bn), _(bD, ft, F, p, bF, bQ, w, bR, bI, bR, bJ, bK, J, _(bd, cR, cS, cT, i, _(j, eR, l, cV), K, cW, bV, _(bW, dq, bY, fn), cZ, da), bz, _(), bM, _(), ca, bn)], dr, bn), _(bD, fu, F, p, bF, cf, w, cg, bI, cg, bJ, bK, J, _(bV, _(bW, fv, bY, fw)), bz, _(), bM, _(), bA, _(ch, _(ci, cj, ck, cl, cm, [_(ck, p, cn, p, co, bn, cp, cq, cr, [_(cs, ct, ck, cu, cv, cw, cx, _(cy, _(p, cu)), cz, _(cA, t, b, cB, cC, bK), cD, cE)])])), cF, bK, cG, [_(bD, fx, F, p, bF, bQ, w, bR, bI, bR, bJ, bK, J, _(i, _(j, cI, l, cJ), K, cK, bV, _(bW, cL, bY, fy), cN, _(cO, _(O, _(P, Q, R, cP)))), bz, _(), bM, _(), ca, bn), _(bD, fz, F, p, bF, bQ, w, bR, bI, bR, bJ, bK, J, _(bd, cR, cS, cT, i, _(j, eL, l, cV), K, cW, bV, _(bW, cX, bY, fA), cZ, da), bz, _(), bM, _(), ca, bn), _(bD, fB, F, p, bF, bQ, w, bR, bI, bR, bJ, bK, J, _(i, _(j, dc, l, cc), K, dd, bV, _(bW, de, bY, fC), cZ, dg), bz, _(), bM, _(), ca, bn), _(bD, fD, F, p, bF, bQ, w, bR, bI, bR, bJ, bK, J, _(bd, cR, cS, cT, i, _(j, fE, l, cV), K, cW, bV, _(bW, dj, bY, fA), cZ, da), bz, _(), bM, _(), ca, bn), _(bD, fF, F, p, bF, bQ, w, bR, bI, bR, bJ, bK, J, _(bd, cR, cS, cT, i, _(j, fG, l, cV), K, cW, bV, _(bW, dm, bY, fA), cZ, da), bz, _(), bM, _(), ca, bn), _(bD, fH, F, p, bF, bQ, w, bR, bI, bR, bJ, bK, J, _(bd, cR, cS, cT, i, _(j, fI, l, cV), K, cW, bV, _(bW, dq, bY, fA), cZ, da), bz, _(), bM, _(), ca, bn)], dr, bn), _(bD, fJ, F, p, bF, cf, w, cg, bI, cg, bJ, bK, J, _(bV, _(bW, fK, bY, fL)), bz, _(), bM, _(), bA, _(ch, _(ci, cj, ck, cl, cm, [_(ck, p, cn, p, co, bn, cp, cq, cr, [_(cs, ct, ck, cu, cv, cw, cx, _(cy, _(p, cu)), cz, _(cA, t, b, cB, cC, bK), cD, cE)])])), cF, bK, cG, [_(bD, fM, F, p, bF, bQ, w, bR, bI, bR, bJ, bK, J, _(i, _(j, cI, l, cJ), K, cK, bV, _(bW, cL, bY, fN), cN, _(cO, _(O, _(P, Q, R, cP)))), bz, _(), bM, _(), ca, bn), _(bD, fO, F, p, bF, bQ, w, bR, bI, bR, bJ, bK, J, _(bd, cR, cS, cT, i, _(j, eL, l, cV), K, cW, bV, _(bW, cX, bY, fP), cZ, da), bz, _(), bM, _(), ca, bn), _(bD, fQ, F, p, bF, bQ, w, bR, bI, bR, bJ, bK, J, _(i, _(j, dc, l, cc), K, dd, bV, _(bW, de, bY, fR), cZ, dg), bz, _(), bM, _(), ca, bn), _(bD, fS, F, p, bF, bQ, w, bR, bI, bR, bJ, bK, J, _(bd, cR, cS, cT, i, _(j, fT, l, cV), K, cW, bV, _(bW, dj, bY, fP), cZ, da), bz, _(), bM, _(), ca, bn), _(bD, fU, F, p, bF, bQ, w, bR, bI, bR, bJ, bK, J, _(bd, cR, cS, cT, i, _(j, di, l, cV), K, cW, bV, _(bW, dm, bY, fP), cZ, da), bz, _(), bM, _(), ca, bn), _(bD, fV, F, p, bF, bQ, w, bR, bI, bR, bJ, bK, J, _(bd, cR, cS, cT, i, _(j, eR, l, cV), K, cW, bV, _(bW, dq, bY, fP), cZ, da), bz, _(), bM, _(), ca, bn)], dr, bn), _(bD, fW, F, p, bF, bQ, w, bR, bI, bR, bJ, bK, fX, bK, J, _(bd, cR, cS, cT, dN, _(P, Q, R, fY, dO, dP), i, _(j, fZ, l, dR), K, dS, bV, _(bW, ga, bY, dH), O, _(P, Q, R, gb), bh, _(P, Q, R, gc), cN, _(fX, _(bd, gd, ge, bK))), bz, _(), bM, _(), bA, _(ch, _(ci, cj, ck, cl, cm, [_(ck, p, cn, p, co, bn, cp, cq, cr, [_(cs, gf, ck, gg, cv, gh, cx, _(gi, _(p, gj)), gk, _(gl, gm, gn, [_(gl, go, gp, gq, gr, [_(gl, gs, gt, bK, gu, bn, gv, bn), _(gl, gw, gx, gy, gz, [])])]))])])), cF, bK, dW, _(dX, gA, gB, gA), ca, bn), _(bD, gC, F, p, bF, bQ, w, bR, bI, bR, bJ, bK, J, _(bd, cR, cS, cT, dN, _(P, Q, R, fY, dO, dP), i, _(j, gD, l, dR), K, dS, bV, _(bW, gE, bY, dH), O, _(P, Q, R, gb), bh, _(P, Q, R, gc), cN, _(fX, _(bd, gd, ge, bK))), bz, _(), bM, _(), bA, _(ch, _(ci, cj, ck, cl, cm, [_(ck, p, cn, p, co, bn, cp, cq, cr, [_(cs, gf, ck, gg, cv, gh, cx, _(gi, _(p, gj)), gk, _(gl, gm, gn, [_(gl, go, gp, gq, gr, [_(gl, gs, gt, bK, gu, bn, gv, bn), _(gl, gw, gx, gy, gz, [])])]))])])), cF, bK, dW, _(dX, gF, gB, gF), ca, bn), _(bD, gG, F, p, bF, bQ, w, bR, bI, bR, bJ, bK, J, _(bd, cR, cS, cT, dN, _(P, Q, R, fY, dO, dP), i, _(j, cU, l, dR), K, dS, bV, _(bW, gH, bY, dH), O, _(P, Q, R, gb), bh, _(P, Q, R, gc), cN, _(fX, _(bd, gd, ge, bK))), bz, _(), bM, _(), bA, _(ch, _(ci, cj, ck, cl, cm, [_(ck, p, cn, p, co, bn, cp, cq, cr, [_(cs, gf, ck, gg, cv, gh, cx, _(gi, _(p, gj)), gk, _(gl, gm, gn, [_(gl, go, gp, gq, gr, [_(gl, gs, gt, bK, gu, bn, gv, bn), _(gl, gw, gx, gy, gz, [])])]))])])), cF, bK, dW, _(dX, gI, gB, gI), ca, bn), _(bD, en, F, gJ, bF, gK, w, gL, bI, gL, bJ, bn, J, _(i, _(j, k, l, gM), bV, _(bW, m, bY, bL), bJ, bn), bz, _(), bM, _(), bA, _(gN, _(ci, gO, ck, gP, cm, [_(ck, p, cn, p, co, bn, cp, cq, cr, [_(cs, gQ, ck, gR, cv, gS, cx, _(gT, _(p, gR)), gU, [[gV]], gW, bn)])])), gX, gY, gZ, m, ha, hb, hc, bL, hd, bK, he, ev, hf, bn, dr, bn, hg, [_(bD, hh, F, hi, w, hj, bC, [_(bD, hk, F, hl, bF, cf, hm, en, hn, bt, w, cg, bI, cg, bJ, bK, J, _(bV, _(bW, m, bY, ho)), bz, _(), bM, _(), cG, [_(bD, hp, F, hq, bF, bQ, hm, en, hn, bt, w, bR, bI, bR, bJ, bK, J, _(i, _(j, k, l, hr), K, cK, bV, _(bW, m, bY, hs), bf, ba, bl, _(bm, bK, bo, ht, bq, ht, br, bp, R, _(bs, bt, bu, bt, bv, bt, bw, bx))), bz, _(), bM, _(), ca, bn), _(bD, hu, F, p, bF, bQ, hm, en, hn, bt, w, bR, bI, bR, bJ, bK, J, _(bd, gd, cS, hv, dN, _(P, Q, R, hw, dO, dP), i, _(j, hx, l, hy), K, dS, bV, _(bW, hz, bY, hA), bf, ba, bl, _(bm, bK, bo, ht, bq, ht, br, bp, R, _(bs, bt, bu, bt, bv, bt, bw, bx))), bz, _(), bM, _(), bA, _(ch, _(ci, cj, ck, cl, cm, [_(ck, p, cn, p, co, bn, cp, cq, cr, [_(cs, hB, ck, hC, cv, hD, cx, _(hE, _(p, hF)), hG, [_(hH, [en], hI, _(hJ, bB, hK, hL, hM, _(gl, gw, gx, C, gz, []), hN, bn, hO, bn, er, _(hP, bn)))])])])), cF, bK, ca, bn), _(bD, hQ, F, p, bF, bQ, hm, en, hn, bt, w, bR, bI, bR, bJ, bK, J, _(bd, cR, cS, cT, i, _(j, hx, l, hR), K, dS, bV, _(bW, hS, bY, hT), cZ, hU, cN, _(cO, _(bd, gd, O, _(P, Q, R, cP)))), bz, _(), bM, _(), bA, _(ch, _(ci, cj, ck, cl, cm, [_(ck, p, cn, p, co, bn, cp, cq, cr, [_(cs, eg, ck, hV, cv, ei, cx, _(hW, _(hX, hV)), el, [_(em, [en], eo, _(ep, hY, er, _(es, et, eu, ev, ew, ex, ey, ez, eA, ev, eB, ex, eC, ev, eD, bn)))])])])), cF, bK, ca, bn), _(bD, hZ, F, p, bF, bQ, hm, en, hn, bt, w, bR, bI, bR, bJ, bK, J, _(bd, cR, cS, cT, dN, _(P, Q, R, S, dO, dP), i, _(j, hx, l, hR), K, dS, bV, _(bW, hz, bY, hT), cZ, hU, cN, _(cO, _(bd, gd, O, _(P, Q, R, ia))), O, _(P, Q, R, ib)), bz, _(), bM, _(), ca, bn), _(bD, gV, F, gT, bF, dy, hm, en, hn, bt, w, dz, bI, dz, bJ, bK, J, _(i, _(j, ic, l, dB), cN, _(dC, _(K, dD), dE, _(K, dF)), K, dG, bV, _(bW, bX, bY, id)), dI, bn, bz, _(), bM, _(), dJ, ie), _(bD, ig, F, p, bF, ih, hm, en, hn, bt, w, ii, bI, ii, bJ, bK, J, _(i, _(j, eY, l, ij), K, ik, T, null, bV, _(bW, bX, bY, dA)), bz, _(), bM, _(), dW, _(dX, il)), _(bD, im, F, p, bF, io, hm, en, hn, bt, w, ip, bI, ip, bJ, bK, J, _(i, _(j, bS, l, iq), cN, _(dC, _(K, dD), dE, _(K, dF)), K, ir, bV, _(bW, bX, bY, is)), dI, bn, bz, _(), bM, _(), dJ, p), _(bD, it, F, p, bF, iu, hm, en, hn, bt, w, bR, bI, iv, bJ, bK, J, _(i, _(j, ic, l, dP), K, iw, bV, _(bW, bX, bY, dA), bh, _(P, Q, R, hw)), bz, _(), bM, _(), dW, _(dX, ix), ca, bn)], dr, bn)], J, _(O, _(P, Q, R, gb), T, null, U, V, V, W, X, bf, ba, bg, bh, _(P, Q, R, bi), bj, ba, bk, bl, _(bm, bn, bo, bp, bq, bp, br, bp, R, _(bs, bt, bu, bt, bv, bt, bw, bx))), bz, _()), _(bD, iy, F, iz, w, hj, bC, [_(bD, iA, F, hl, bF, cf, hm, en, hn, iB, w, cg, bI, cg, bJ, bK, J, _(bV, _(bW, m, bY, iC)), bz, _(), bM, _(), cG, [_(bD, iD, F, hq, bF, bQ, hm, en, hn, iB, w, bR, bI, bR, bJ, bK, J, _(i, _(j, k, l, iE), K, cK, bV, _(bW, m, bY, iF), bf, ba, bl, _(bm, bK, bo, ht, bq, ht, br, bp, R, _(bs, bt, bu, bt, bv, bt, bw, bx))), bz, _(), bM, _(), ca, bn), _(bD, iG, F, p, bF, bQ, hm, en, hn, iB, w, bR, bI, bR, bJ, bK, J, _(bd, gd, cS, hv, dN, _(P, Q, R, hw, dO, dP), i, _(j, hx, l, hy), K, dS, bV, _(bW, iH, bY, iI), bf, ba, bl, _(bm, bK, bo, ht, bq, ht, br, bp, R, _(bs, bt, bu, bt, bv, bt, bw, bx))), bz, _(), bM, _(), bA, _(ch, _(ci, cj, ck, cl, cm, [_(ck, p, cn, p, co, bn, cp, cq, cr, [_(cs, hB, ck, iJ, cv, hD, cx, _(iK, _(p, iL)), hG, [_(hH, [en], hI, _(hJ, bB, hK, iB, hM, _(gl, gw, gx, C, gz, []), hN, bn, hO, bn, er, _(hP, bn)))])])])), cF, bK, ca, bn), _(bD, iM, F, p, bF, bQ, hm, en, hn, iB, w, bR, bI, bR, bJ, bK, J, _(bd, cR, cS, cT, i, _(j, hx, l, hR), K, dS, bV, _(bW, iN, bY, eR), cZ, hU, cN, _(cO, _(bd, gd, O, _(P, Q, R, cP)))), bz, _(), bM, _(), bA, _(ch, _(ci, cj, ck, cl, cm, [_(ck, p, cn, p, co, bn, cp, cq, cr, [_(cs, eg, ck, hV, cv, ei, cx, _(hW, _(hX, hV)), el, [_(em, [en], eo, _(ep, hY, er, _(es, et, eu, ev, ew, ex, ey, ez, eA, ev, eB, ex, eC, ev, eD, bn)))])])])), cF, bK, ca, bn), _(bD, iO, F, p, bF, bQ, hm, en, hn, iB, w, bR, bI, bR, bJ, bK, J, _(bd, cR, cS, cT, dN, _(P, Q, R, S, dO, dP), i, _(j, hx, l, hR), K, dS, bV, _(bW, iH, bY, eR), cZ, hU, cN, _(cO, _(bd, gd, O, _(P, Q, R, ia))), O, _(P, Q, R, ib)), bz, _(), bM, _(), ca, bn), _(bD, iP, F, gT, bF, dy, hm, en, hn, iB, w, dz, bI, dz, bJ, bK, J, _(i, _(j, ic, l, dB), cN, _(dC, _(K, dD), dE, _(K, dF)), K, dG, bV, _(bW, bX, bY, fI)), dI, bn, bz, _(), bM, _(), dJ, ie), _(bD, iQ, F, p, bF, ih, hm, en, hn, iB, w, ii, bI, ii, bJ, bK, J, _(i, _(j, eY, l, ij), K, ik, T, null, bV, _(bW, bX, bY, fm)), bz, _(), bM, _(), dW, _(dX, il)), _(bD, iR, F, p, bF, io, hm, en, hn, iB, w, ip, bI, ip, bJ, bK, J, _(i, _(j, bS, l, iS), cN, _(dC, _(K, dD), dE, _(K, dF)), K, ir, bV, _(bW, bX, bY, iT)), dI, bn, bz, _(), bM, _(), dJ, p), _(bD, iU, F, p, bF, iu, hm, en, hn, iB, w, bR, bI, iv, bJ, bK, J, _(i, _(j, ic, l, dP), K, iw, bV, _(bW, bX, bY, eL), bh, _(P, Q, R, hw)), bz, _(), bM, _(), dW, _(dX, ix), ca, bn)], dr, bn)], J, _(O, _(P, Q, R, gb), T, null, U, V, V, W, X, bf, ba, bg, bh, _(P, Q, R, bi), bj, ba, bk, bl, _(bm, bn, bo, bp, bq, bp, br, bp, R, _(bs, bt, bu, bt, bv, bt, bw, bx))), bz, _())])])), iV, _(iW, _(u, iW, w, iX, g, bG, z, _(), A, [_(B, C, D, iY, F, iZ, H, ja)], J, _(K, L, M, N, O, _(P, Q, R, S), T, null, U, V, V, W, X, Y, null, Z, ba, bb, bc, bd, be, bf, ba, bg, bh, _(P, Q, R, bi), bj, ba, bk, bl, _(bm, bn, bo, bp, bq, bp, br, bp, R, _(bs, bt, bu, bt, bv, bt, bw, bx)), i, _(j, m, l, m)), n, [], bA, _(), bB, _(bC, [_(bD, jb, F, p, bF, gK, w, gL, bI, gL, bJ, bK, J, _(i, _(j, k, l, bL)), bz, _(), bM, _(), gX, gY, gZ, m, ha, hb, hc, m, hd, bK, he, ev, hf, bK, dr, bn, hg, [_(bD, jc, F, hi, w, hj, bC, [_(bD, jd, F, p, bF, bQ, hm, jb, hn, bt, w, bR, bI, bR, bJ, bK, J, _(i, _(j, k, l, bL), K, bU), bz, _(), bM, _(), ca, bn), _(bD, je, F, p, bF, ih, hm, jb, hn, bt, w, ii, bI, ii, bJ, bK, J, _(i, _(j, jf, l, hy), K, ik, T, null, bV, _(bW, jg, bY, jh), cN, _(cO, _(T, null))), bz, _(), bM, _(), bA, _(ch, _(ci, cj, ck, cl, cm, [_(ck, p, cn, p, co, bn, cp, cq, cr, [_(cs, ct, ck, ji, cv, cw, cx, _(jj, _(p, ji)), cz, _(cA, t, b, jk, cC, bK), cD, cE)])])), cF, bK, dW, _(jl, jm, jn, jo)), _(bD, jp, F, p, bF, bQ, hm, jb, hn, bt, w, bR, bI, bR, bJ, bK, J, _(bd, cR, cS, cT, dN, _(P, Q, R, ed, dO, dP), i, _(j, jq, l, hy), K, dS, bV, _(bW, jr, bY, jh), O, _(P, Q, R, cP), bh, _(P, Q, R, cP), cZ, da, cN, _(cO, _(dN, _(P, Q, R, dV, dO, dP)))), bz, _(), bM, _(), bA, _(ch, _(ci, cj, ck, cl, cm, [_(ck, p, cn, p, co, bn, cp, cq, cr, [_(cs, ct, ck, js, cv, cw, cx, _(y, _(p, js)), cz, _(cA, t, b, c, cC, bK), cD, cE)])])), cF, bK, ca, bn), _(bD, jt, F, p, bF, bQ, hm, jb, hn, bt, w, bR, bI, bR, bJ, bK, J, _(bd, cR, cS, cT, dN, _(P, Q, R, ed, dO, dP), i, _(j, ju, l, hy), K, dS, bV, _(bW, jv, bY, jh), O, _(P, Q, R, cP), bh, _(P, Q, R, cP), cZ, da, cN, _(cO, _(dN, _(P, Q, R, dV, dO, dP)))), bz, _(), bM, _(), bA, _(ch, _(ci, cj, ck, cl, cm, [_(ck, p, cn, p, co, bn, cp, cq, cr, [_(cs, ct, ck, jw, cv, cw, cx, _(jx, _(p, jw)), cz, _(cA, t, b, jy, cC, bK), cD, cE)])])), cF, bK, ca, bn), _(bD, jz, F, p, bF, dM, hm, jb, hn, bt, w, bR, bI, bR, bJ, bK, J, _(bd, cR, cS, cT, dN, _(P, Q, R, ed, dO, dP), i, _(j, jA, l, hy), K, dS, bV, _(bW, jB, bY, jh), O, _(P, Q, R, cP), bh, _(P, Q, R, cP), cZ, da, cN, _(cO, _(dN, _(P, Q, R, dV, dO, dP)))), bz, _(), bM, _(), bA, _(ch, _(ci, cj, ck, cl, cm, [_(ck, p, cn, p, co, bn, cp, cq, cr, [_(cs, ct, ck, jC, cv, cw, cx, _(jD, _(p, jC)), cz, _(cA, t, b, jE, cC, bK), cD, cE)])])), cF, bK, dW, _(jF, jG, jH, jG), ca, bn), _(bD, jI, F, p, bF, bQ, hm, jb, hn, bt, w, bR, bI, bR, bJ, bK, J, _(bd, cR, cS, cT, dN, _(P, Q, R, ed, dO, dP), i, _(j, ju, l, hy), K, dS, bV, _(bW, jJ, bY, jh), O, _(P, Q, R, cP), bh, _(P, Q, R, cP), cZ, da, cN, _(cO, _(dN, _(P, Q, R, dV, dO, dP)))), bz, _(), bM, _(), bA, _(ch, _(ci, cj, ck, cl, cm, [_(ck, p, cn, p, co, bn, cp, cq, cr, [_(cs, ct, ck, jK, cv, cw, cx, _(jL, _(p, jK)), cz, _(cA, t, b, jM, cC, bK), cD, cE)])])), cF, bK, ca, bn), _(bD, jN, F, jO, bF, gK, hm, jb, hn, bt, w, gL, bI, gL, bJ, bK, J, _(i, _(j, jP, l, hy), bV, _(bW, jQ, bY, jh)), bz, _(), bM, _(), he, ev, hf, bK, dr, bn, hg, [_(bD, jR, F, hi, w, hj, bC, [_(bD, jS, F, p, bF, dM, hm, jN, hn, bt, w, bR, bI, bR, bJ, bK, J, _(bd, cR, cS, cT, dN, _(P, Q, R, ed, dO, dP), i, _(j, jP, l, hy), K, dS, O, _(P, Q, R, cP), bh, _(P, Q, R, cP), cZ, da, cN, _(cO, _(dN, _(P, Q, R, dV, dO, dP)))), bz, _(), bM, _(), bA, _(ch, _(ci, cj, ck, cl, cm, [_(ck, p, cn, p, co, bn, cp, cq, cr, [_(cs, hB, ck, jT, cv, hD, cx, _(jU, _(p, jV)), hG, [_(hH, [jN], hI, _(hJ, bB, hK, hL, hM, _(gl, gw, gx, C, gz, []), hN, bn, hO, bn, er, _(hP, bn)))]), _(cs, eg, ck, jW, cv, ei, cx, _(jX, _(hX, jW)), el, [_(em, [jY], eo, _(ep, eq, er, _(es, ez, eu, ev, ew, ex, ey, et, eA, ev, eB, ex, eC, ev, eD, bn)))])])])), cF, bK, dW, _(jZ, ka, kb, ka), ca, bn)], J, _(O, _(P, Q, R, gb), T, null, U, V, V, W, X, bf, ba, bg, bh, _(P, Q, R, bi), bj, ba, bk, bl, _(bm, bn, bo, bp, bq, bp, br, bp, R, _(bs, bt, bu, bt, bv, bt, bw, bx))), bz, _()), _(bD, kc, F, kd, w, hj, bC, [_(bD, ke, F, p, bF, bQ, hm, jN, hn, iB, w, bR, bI, bR, bJ, bK, J, _(dN, _(P, Q, R, kf, dO, dP), i, _(j, jP, l, kg), K, cK, bV, _(bW, m, bY, ij), O, _(P, Q, R, kf), bh, _(P, Q, R, kh)), bz, _(), bM, _(), dW, _(ki, kj), ca, bn), _(bD, kk, F, p, bF, dM, hm, jN, hn, iB, w, bR, bI, bR, bJ, bK, J, _(bd, cR, cS, cT, dN, _(P, Q, R, ed, dO, dP), i, _(j, jP, l, hy), K, dS, O, _(P, Q, R, cP), bh, _(P, Q, R, cP), cZ, da, cN, _(cO, _(dN, _(P, Q, R, dV, dO, dP)))), bz, _(), bM, _(), bA, _(ch, _(ci, cj, ck, cl, cm, [_(ck, p, cn, p, co, bn, cp, cq, cr, [_(cs, hB, ck, kl, cv, hD, cx, _(km, _(p, kn)), hG, [_(hH, [jN], hI, _(hJ, bB, hK, iB, hM, _(gl, gw, gx, C, gz, []), hN, bn, hO, bn, er, _(hP, bn)))]), _(cs, eg, ck, ko, cv, ei, cx, _(kp, _(ek, ko)), el, [_(em, [jY], eo, _(ep, hY, er, _(es, ez, eu, ev, ew, ex, ey, et, eA, ev, eB, ex, eC, ev, eD, bn)))])])])), cF, bK, dW, _(kq, ka, kr, ka), ca, bn)], J, _(O, _(P, Q, R, gb), T, null, U, V, V, W, X, bf, ba, bg, bh, _(P, Q, R, bi), bj, ba, bk, bl, _(bm, bn, bo, bp, bq, bp, br, bp, R, _(bs, bt, bu, bt, bv, bt, bw, bx))), bz, _())]), _(bD, jY, F, p, bF, cf, hm, jb, hn, bt, w, cg, bI, cg, bJ, bn, J, _(bJ, bn), bz, _(), bM, _(), cG, [_(bD, ks, F, p, bF, bQ, hm, jb, hn, bt, w, bR, bI, bR, bJ, bn, J, _(i, _(j, kt, l, ku), K, cK, bV, _(bW, kv, bY, bL), bj, kw, bf, kx), bz, _(), bM, _(), ca, bn), _(bD, ky, F, p, bF, bQ, hm, jb, hn, bt, w, bR, bI, bR, bJ, bn, J, _(bd, cR, cS, cT, i, _(j, kt, l, kz), K, dS, bV, _(bW, kv, bY, bL), bh, _(P, Q, R, cP), bj, ba, cN, _(cO, _(O, _(P, Q, R, cP)))), bz, _(), bM, _(), ca, bn), _(bD, kA, F, p, bF, bQ, hm, jb, hn, bt, w, bR, bI, bR, bJ, bn, J, _(bd, cR, cS, cT, i, _(j, kt, l, kB), K, dS, bV, _(bW, kv, bY, kC), bh, _(P, Q, R, cP), bj, ba, cN, _(cO, _(O, _(P, Q, R, cP)))), bz, _(), bM, _(), ca, bn), _(bD, kD, F, p, bF, bQ, hm, jb, hn, bt, w, bR, bI, bR, bJ, bn, J, _(bd, cR, cS, cT, dN, _(P, Q, R, fY, dO, dP), i, _(j, kt, l, kE), K, dS, bV, _(bW, kv, bY, kF), bh, _(P, Q, R, cP), cN, _(cO, _(dN, _(P, Q, R, kG, dO, dP)))), bz, _(), bM, _(), bA, _(ch, _(ci, cj, ck, cl, cm, [_(ck, p, cn, p, co, bn, cp, cq, cr, [_(cs, ct, ck, jC, cv, cw, cx, _(jD, _(p, jC)), cz, _(cA, t, b, jE, cC, bK), cD, cE)])])), cF, bK, ca, bn)], dr, bn)], J, _(O, _(P, Q, R, gb), T, null, U, V, V, W, X, bf, ba, bg, bh, _(P, Q, R, bi), bj, ba, bk, bl, _(bm, bn, bo, bp, bq, bp, br, bp, R, _(bs, bt, bu, bt, bv, bt, bw, bx))), bz, _())])]))), gU, _(kH, _(kI, kJ, kK, _(kI, kL), kM, _(kI, kN), kO, _(kI, kP), kQ, _(kI, kR), kS, _(kI, kT), kU, _(kI, kV), kW, _(kI, kX), kY, _(kI, kZ), la, _(kI, lb), lc, _(kI, ld), le, _(kI, lf), lg, _(kI, lh), li, _(kI, lj), lk, _(kI, ll), lm, _(kI, ln), iY, _(kI, lo)), E, _(kI, lp), lq, _(kI, lr), ls, _(kI, lt), lu, _(kI, lv), lw, _(kI, lx), ly, _(kI, lz), lA, _(kI, lB), lC, _(kI, lD), lE, _(kI, lF), lG, _(kI, lH), lI, _(kI, lJ), lK, _(kI, lL), lM, _(kI, lN), lO, _(kI, lP), lQ, _(kI, lR), lS, _(kI, lT), lU, _(kI, lV), lW, _(kI, lX), lY, _(kI, lZ), ma, _(kI, mb), mc, _(kI, md), me, _(kI, mf), mg, _(kI, mh), mi, _(kI, mj), mk, _(kI, ml), mm, _(kI, mn), mo, _(kI, mp), mq, _(kI, mr), ms, _(kI, mt), mu, _(kI, mv), mw, _(kI, mx), my, _(kI, mz), mA, _(kI, mB), mC, _(kI, mD), mE, _(kI, mF), mG, _(kI, mH), mI, _(kI, mJ), mK, _(kI, mL), mM, _(kI, mN), mO, _(kI, mP), mQ, _(kI, mR), mS, _(kI, mT), mU, _(kI, mV), mW, _(kI, mX), mY, _(kI, mZ), na, _(kI, nb), nc, _(kI, nd), ne, _(kI, nf), ng, _(kI, nh), ni, _(kI, nj), nk, _(kI, nl), nm, _(kI, nn), no, _(kI, np), nq, _(kI, nr), ns, _(kI, nt), nu, _(kI, nv), nw, _(kI, nx), ny, _(kI, nz), nA, _(kI, nB), nC, _(kI, nD), nE, _(kI, nF), nG, _(kI, nH), nI, _(kI, nJ), nK, _(kI, nL), nM, _(kI, nN), nO, _(kI, nP), nQ, _(kI, nR), nS, _(kI, nT), nU, _(kI, nV), nW, _(kI, nX)));
        };
        var b = "url", c = "forum_page.html", d = "generationDate", e = new Date(1590670250739.57),
            f = "defaultAdaptiveView", g = "name", h = "Base", i = "size", j = "width", k = 1536, l = "height", m = 0,
            n = "adaptiveViews", o = "sketchKeys", p = "", q = "s0", r = "variables", s = "OnLoadVariable", t = "page",
            u = "packageId", v = "e7a46293992c424ba4ba453ceaf2df90", w = "type", x = "Axure:Page", y = "Forum Page",
            z = "notes", A = "annotations", B = "fn", C = "1", D = "ownerId", E = "06f282e7745a41c98614ca6dc8e55c62",
            F = "label", G = "(Rectangle)", H = "Note", I = "<p><span>Should be a scrollable panel.</span></p>",
            J = "style", K = "baseStyle", L = "627587b6038d43cca051c114ac41ad32", M = "pageAlignment", N = "center",
            O = "fill", P = "fillType", Q = "solid", R = "color", S = 0xFFFFFFFF, T = "image", U = "imageAlignment",
            V = "near", W = "imageRepeat", X = "auto", Y = "favicon", Z = "sketchFactor", ba = "0", bb = "colorStyle",
            bc = "appliedColor", bd = "fontName", be = "Applied Font", bf = "borderWidth", bg = "borderVisibility",
            bh = "borderFill", bi = 0xFF797979, bj = "cornerRadius", bk = "cornerVisibility", bl = "outerShadow",
            bm = "on", bn = false, bo = "offsetX", bp = 5, bq = "offsetY", br = "blurRadius", bs = "r", bt = 0,
            bu = "g", bv = "b", bw = "a", bx = 0.349019607843137, by = 1023, bz = "adaptiveStyles",
            bA = "interactionMap", bB = "diagram", bC = "objects", bD = "id", bE = "c00394694dd94989a52715ac184cf0b3",
            bF = "friendlyType", bG = "Navigation Bar", bH = "referenceDiagramObject", bI = "styleType", bJ = "visible",
            bK = true, bL = 60, bM = "imageOverrides", bN = "masterId", bO = "23a9f451cfcd4f76b76a53a19b3ceca7",
            bP = "06f282e7745a41c98614ca6dc8e55c62", bQ = "Rectangle", bR = "vectorShape", bS = 1217, bT = 587,
            bU = "47641f9a00ac465095d6b672bbdffef6", bV = "location", bW = "x", bX = 79, bY = "y", bZ = 116,
            ca = "generateCompound", cb = "5400751e9c70456c982fe1caaba2dc58", cc = 47,
            cd = "0882bfcd7d11450d85d157758311dca5", ce = "58424e7ee88a4d0492ae24e0a7644fdb", cf = "Group",
            cg = "layer", ch = "onClick", ci = "eventType", cj = "OnClick", ck = "description", cl = "Click or Tap",
            cm = "cases", cn = "conditionString", co = "isNewIfGroup", cp = "caseColorHex", cq = "AB68FF",
            cr = "actions", cs = "action", ct = "linkWindow", cu = "Open Single Post Page in Current Window",
            cv = "displayName", cw = "Open Link", cx = "actionInfoDescriptions", cy = "Single Post Page", cz = "target",
            cA = "targetType", cB = "single_post_page.html", cC = "includeVariables", cD = "linkType", cE = "current",
            cF = "tabbable", cG = "objs", cH = "901999d7b2394e7387b4ca7484d7266c", cI = 1155, cJ = 75,
            cK = "4b7bfc596114427989e10bb0b557d0ce", cL = 110, cM = 187, cN = "stateStyles", cO = "mouseOver",
            cP = 0xFFF2F2F2, cQ = "1a6313f4e9ba49deb4159529306ce03d",
            cR = "'SF Pro Text Light', 'SF Pro Text', sans-serif", cS = "fontWeight", cT = "300", cU = 102, cV = 24,
            cW = "1111111151944dfba49f67fd55eb1f88", cX = 139, cY = 213, cZ = "fontSize", da = "20px",
            db = "7a8c01e44b104301aac0135c761b8aa5", dc = 548, dd = "4988d43d80b44008a4a415096f1632af", de = 289,
            df = 201, dg = "12px", dh = "7b5c9e62cbd24533a2a1dea69e9ac00b", di = 46, dj = 932,
            dk = "899329bee0be42d29e9c2d082bba4a8c", dl = 55, dm = 1018, dn = "c952837d3cf34c05aea6d86b6e2aaf3d",
            dp = 69, dq = 1113, dr = "propagate", ds = "3827ea02ab7e44b5a41e7ab2d5f00c28", dt = 146, du = 30, dv = 76,
            dw = "25px", dx = "5b797ec68da3487c99100e94df33f1d6", dy = "Text Field", dz = "textBox", dA = 382, dB = 25,
            dC = "hint", dD = "4889d666e8ad4c5e81e59863039a5cc0", dE = "disabled",
            dF = "9bd0236217a94d89b0314c8c7fc75f16", dG = "44157808f2934100b68f2394a66b2bba", dH = 127,
            dI = "HideHintOnFocused", dJ = "placeholderText", dK = "🔍 Search topic or comment",
            dL = "26cfc587e6e046cca989890cbee44d36", dM = "Shape", dN = "foreGroundFill", dO = "opacity", dP = 1,
            dQ = 170, dR = 26, dS = "c9f35713a1cf4e91a0f2dbac65e6fb5c", dT = 509, dU = 0xCD555555, dV = 0xFF7F7F7F,
            dW = "images", dX = "normal~", dY = "static/images/forum_page/u431.svg", dZ = "mouseOver~",
            ea = "static/images/forum_page/u431_mouseOver.svg", eb = "1ae0e0b3313146d590721859d386a07e", ec = "New post",
            ed = 0xFF000000, ee = 699, ef = 0xCDAAAAAA, eg = "fadeWidget", eh = "Show New post panelslide up 500ms",
            ei = "Show/Hide", ej = "Show New post panel", ek = "slide up 500ms", el = "objectsToFades",
            em = "objectPath", en = "cfa3f9161ab240eab914b39507abbde8", eo = "fadeInfo", ep = "fadeType", eq = "show",
            er = "options", es = "easing", et = "slideUp", eu = "animation", ev = "none", ew = "duration", ex = 500,
            ey = "easingHide", ez = "slideDown", eA = "animationHide", eB = "durationHide", eC = "showType",
            eD = "bringToFront", eE = "static/images/forum_page/new_post_u432.svg", eF = "079a28c891544a478f1ae1ff94c4c32b",
            eG = 120, eH = 206, eI = "26b38355e10042e6a5bcda831c8798da", eJ = 272,
            eK = "85316e2cb7d34bcf89d31f15765c78ee", eL = 105, eM = 298, eN = "0b46b784139f4bd1bc8d82501124d18f",
            eO = 286, eP = "8759ea5ae475424997bf189a0d50d9be", eQ = "87da8ff07f0c416a98ed1829374d2d95", eR = 58,
            eS = "ac053960c1754d61bb0b9a7eb9c57975", eT = 70, eU = "dc47b90eb6f44c3086143800c7a2748e", eV = 130,
            eW = 216, eX = "75681205badb4a3894fdadb854d8a066", eY = 357, eZ = "75ffb51a6c24430ba6887eafc13790bd",
            fa = 383, fb = "0b2b384e26dd4aafa5c96ee21e606d36", fc = 371, fd = "d1400e8dec4243548c4165154059af98",
            fe = "a3f4326480094556bc07e19e09f2c65d", ff = "bdecd33d9005479fb24cbc5b7d02f67d",
            fg = "04b64529999d4e5b8d1058332b082b48", fh = 140, fi = 226, fj = "c73b469a00f8425fbc8453341c157c5f",
            fk = 442, fl = "a8d15a6a56fd4db8b14c34e27fa572a8", fm = 106, fn = 468,
            fo = "a45de412b11b41efbb83908b4daf6180", fp = 456, fq = "6d7c60bee57b497b8ed2f725f94e6b9c", fr = 33,
            fs = "034c2c6e283b493bbc30458e23a41672", ft = "e9b722a6139849ecad0b88a4b3fc5b82",
            fu = "2faa4c3b64d94a069946e697da82bc69", fv = 150, fw = 236, fx = "beb10644887944fb9bb18236093d68f6",
            fy = 527, fz = "dbade85b441d4dbdbe15d79f7dd65f9b", fA = 553, fB = "61b6c54e92a6419c93f3f9f651beabe1",
            fC = 541, fD = "c97f9bccf14c42fa84a187b1d99f416d", fE = 42, fF = "eb28d1df0f93438a888cce2ad8dc2784",
            fG = 54, fH = "bb02acaadffe4f68b659651046264206", fI = 66, fJ = "deb4093eded542409f5cd5f2ba8340cd",
            fK = 160, fL = 246, fM = "1e95de3d433f46f8a76821bdfa88628a", fN = 612,
            fO = "9bdb62b98bcb4d60ae7d37bd3b9d1943", fP = 638, fQ = "e48ffb2f123b4e0baf9b621899998e3c", fR = 626,
            fS = "4987e387fb3841fe9e41a6865fc3c048", fT = 44, fU = "35473c73cd504d139de6c6fe78e80fa7",
            fV = "24a923987e434e5888d792c01922f6ce", fW = "2fd53716354f442f9fef0acf996d23cb", fX = "selected",
            fY = 0xFF027DB4, fZ = 83, ga = 912, gb = 0xFFFFFF, gc = 0x797979,
            gd = "'SF Pro Display Bold', 'SF Pro Display', sans-serif", ge = "underline", gf = "setFunction",
            gg = "Set is selected of This equal to &quot;true&quot;", gh = "Set Selected/Checked",
            gi = "This to \"true\"", gj = "is selected of This equal to \"true\"", gk = "expr", gl = "exprType",
            gm = "block", gn = "subExprs", go = "fcall", gp = "functionName", gq = "SetCheckState", gr = "arguments",
            gs = "pathLiteral", gt = "isThis", gu = "isFocused", gv = "isTarget", gw = "stringLiteral", gx = "value",
            gy = "true", gz = "stos", gA = "static/images/index/u37.svg", gB = "selected~",
            gC = "81871ad0155d4ba181d4e5a9f621d091", gD = 111, gE = 1031, gF = "static/images/forum_page/u469.svg",
            gG = "2a896a187da848719e3a5283feaa133b", gH = 1163, gI = "static/images/forum_page/u470.svg",
            gJ = "New post panel", gK = "Dynamic Panel", gL = "dynamicPanel", gM = 682, gN = "onShow", gO = "OnShow",
            gP = "Shown", gQ = "setFocusOnWidget", gR = "Set Focus on Post title field", gS = "Focus",
            gT = "Post title field", gU = "objectPaths", gV = "50415ef1aef7491591c4c1debe1399bc", gW = "selectText",
            gX = "fixedHorizontal", gY = "left", gZ = "fixedMarginHorizontal", ha = "fixedVertical", hb = "top",
            hc = "fixedMarginVertical", hd = "fixedKeepInFront", he = "scrollbars", hf = "fitToContent",
            hg = "diagrams", hh = "0dde3a48ac6943dba5c5df7079df0d66", hi = "Default", hj = "Axure:PanelDiagram",
            hk = "418f5be9396642f192bfd6e89527fea8", hl = "New post group", hm = "parentDynamicPanel",
            hn = "panelIndex", ho = -442, hp = "259176512a214044b7b3ad2273ca496c", hq = "Panel", hr = 359, hs = 323,
            ht = -5, hu = "d5384708408e495b817ab4b5c8a3ff95", hv = "700", hw = 0xFFAAAAAA, hx = 80, hy = 35, hz = 1216,
            hA = 288, hB = "setPanelState", hC = "Set New post panel to&nbsp; to Full screen ", hD = "Set Panel State",
            hE = "New post panel to Full screen", hF = "Set New post panel to  to Full screen ", hG = "panelsToStates",
            hH = "panelPath", hI = "stateInfo", hJ = "setStateType", hK = "stateNumber", hL = 2, hM = "stateValue",
            hN = "loop", hO = "showWhenSet", hP = "compress", hQ = "2f12b2c51ab74eb19a8ddd515e74db3e", hR = 40,
            hS = 1122, hT = 335, hU = "15px", hV = "Hide New post panelslide down 500ms", hW = "Hide New post panel",
            hX = "slide down 500ms", hY = "hide", hZ = "86f398abe7e646d5a3af0b91612a873a", ia = 0xFF333333,
            ib = 0xFF555555, ic = 484, id = 343, ie = "Enter post title", ig = "f3b8e0cdaebd4bbda9016cb6ae38f029",
            ih = "Image", ii = "imageBox", ij = 38, ik = "75a91ee5b9d042cfa01b8d565fe289c0",
            il = "static/images/forum_page/u478.PNG", im = "a6648a1df9914243bdc465f5162a6c38", io = "Text Area",
            ip = "textArea", iq = 224, ir = "42ee17691d13435b8256d8d0a814778f", is = 419,
            it = "24824c1fc21746269a039f2a718ddbc1", iu = "Line", iv = "horizontalLine",
            iw = "619b2148ccc1497285562264d51992f9", ix = "static/images/forum_page/u480.svg",
            iy = "c324a29fe7b84a5293488036bfc95836", iz = "Full screen", iA = "69ee0183113f4b6fa319d7cc3f6fa0ec",
            iB = 1, iC = 348, iD = "749d1294b12b4b8091cbc01826002c5e", iE = 637, iF = 45,
            iG = "3c23ee99e3e845af888e3f2b7dca2c5c", iH = 1226, iI = 10, iJ = "Set New post panel to&nbsp; to Default ",
            iK = "New post panel to Default", iL = "Set New post panel to  to Default ",
            iM = "9bcac6486ae643749f63485998a9e423", iN = 1132, iO = "3f3b3abc06b040f68da41940851b6cae",
            iP = "3e57ed5de9314c7aa0a1e6cf20fc4595", iQ = "0550f219e8954ef5bbbee7cccd08cacc",
            iR = "3fe9a4f4b3bc4573be1db1ea19569aca", iS = 502, iT = 141, iU = "8bef29df917e4a1da9b7d2fe8c31f2bb",
            iV = "masters", iW = "23a9f451cfcd4f76b76a53a19b3ceca7", iX = "Axure:Master",
            iY = "f5877c3cd8d2445e930da5295b1ec357", iZ = "See all notification",
            ja = "<p><span>Does not set the state correctly yet.</span></p>", jb = "4ad10fe9a75a4ffa889ea34e3abbfb1e",
            jc = "98af6ace4f754066a2dd1f0fe3547351", jd = "476ffec7fe064591bb76409a01cb7577",
            je = "1fd7b4d42f644422ad8462de09a667e4", jf = 230, jg = 78, jh = 12, ji = "Open index in Current Window",
            jj = "index", jk = "index.html", jl = "u406~normal~", jm = "static/images/index/u14.png", jn = "u406~mouseOver~",
            jo = "static/images/index/u14_mouseOver.png", jp = "339cd1bb681a4a46bc0da22063498ac5", jq = 123, jr = 424,
            js = "Open Forum Page in Current Window", jt = "c35a0553fb464feb9a801a9440343b35", ju = 142, jv = 547,
            jw = "Open Past Papers Page in Current Window", jx = "Past Papers Page", jy = "past_papers_page.html",
            jz = "ae49a7bdf1184f318633f70a0c89ceb1", jA = 97, jB = 1000, jC = "Open User Info Page in Current Window",
            jD = "User Info Page", jE = "user_info_page.html", jF = "u409~normal~", jG = "static/images/index/u17.svg",
            jH = "u409~mouseOver~", jI = "a79a951984694d148ce241158fea1a38", jJ = 689,
            jK = "Open All Problems Page in Current Window", jL = "All Problems Page", jM = "all_problems_page.html",
            jN = "7332039fd64b4d06b75cd300213dc790", jO = "Notification panel", jP = 57, jQ = 943,
            jR = "b37fccb54d47461b91828b2c5422aeca", jS = "de661127bfa14e008ace412f4e9410d0",
            jT = "Set Notification panel to&nbsp; to Click ", jU = "Notification panel to Click",
            jV = "Set Notification panel to  to Click ", jW = "Show (Group)slide down 500ms", jX = "Show (Group)",
            jY = "5680550e760848c1895b1238aa0cb69b", jZ = "u412~normal~", ka = "static/images/index/u20.svg",
            kb = "u412~mouseOver~", kc = "a9f210ddc51f47f1a83bd5eaf1ebecd2", kd = "Click",
            ke = "ccef2e8ccf694e37a5a07f1632734658", kf = 0xFF02A7F0, kg = 7, kh = 0x2A7F0, ki = "u413~normal~",
            kj = "static/images/index/u21.svg", kk = "53c272a51cad4d9db52ccdc9caca9049",
            kl = "Set Notification panel to&nbsp; to Default ", km = "Notification panel to Default",
            kn = "Set Notification panel to  to Default ", ko = "Hide (Group)slide up 500ms", kp = "Hide (Group)",
            kq = "u414~normal~", kr = "u414~mouseOver~", ks = "756da6e27e53459eacf10d4c28550e10", kt = 300, ku = 176,
            kv = 822, kw = "5", kx = "2", ky = "2b3f2a40296c48ed94d24cc7bb793ad8", kz = 72,
            kA = "7470b0ad1de94026b1af4d0a98d29b58", kB = 73, kC = 132, kD = "f5877c3cd8d2445e930da5295b1ec357",
            kE = 31, kF = 205, kG = 0xFF81D3F8, kH = "c00394694dd94989a52715ac184cf0b3", kI = "scriptId", kJ = "u403",
            kK = "4ad10fe9a75a4ffa889ea34e3abbfb1e", kL = "u404", kM = "476ffec7fe064591bb76409a01cb7577", kN = "u405",
            kO = "1fd7b4d42f644422ad8462de09a667e4", kP = "u406", kQ = "339cd1bb681a4a46bc0da22063498ac5", kR = "u407",
            kS = "c35a0553fb464feb9a801a9440343b35", kT = "u408", kU = "ae49a7bdf1184f318633f70a0c89ceb1", kV = "u409",
            kW = "a79a951984694d148ce241158fea1a38", kX = "u410", kY = "7332039fd64b4d06b75cd300213dc790", kZ = "u411",
            la = "de661127bfa14e008ace412f4e9410d0", lb = "u412", lc = "ccef2e8ccf694e37a5a07f1632734658", ld = "u413",
            le = "53c272a51cad4d9db52ccdc9caca9049", lf = "u414", lg = "5680550e760848c1895b1238aa0cb69b", lh = "u415",
            li = "756da6e27e53459eacf10d4c28550e10", lj = "u416", lk = "2b3f2a40296c48ed94d24cc7bb793ad8", ll = "u417",
            lm = "7470b0ad1de94026b1af4d0a98d29b58", ln = "u418", lo = "u419", lp = "u420",
            lq = "5400751e9c70456c982fe1caaba2dc58", lr = "u421", ls = "58424e7ee88a4d0492ae24e0a7644fdb", lt = "u422",
            lu = "901999d7b2394e7387b4ca7484d7266c", lv = "u423", lw = "1a6313f4e9ba49deb4159529306ce03d", lx = "u424",
            ly = "7a8c01e44b104301aac0135c761b8aa5", lz = "u425", lA = "7b5c9e62cbd24533a2a1dea69e9ac00b", lB = "u426",
            lC = "899329bee0be42d29e9c2d082bba4a8c", lD = "u427", lE = "c952837d3cf34c05aea6d86b6e2aaf3d", lF = "u428",
            lG = "3827ea02ab7e44b5a41e7ab2d5f00c28", lH = "u429", lI = "5b797ec68da3487c99100e94df33f1d6", lJ = "u430",
            lK = "26cfc587e6e046cca989890cbee44d36", lL = "u431", lM = "1ae0e0b3313146d590721859d386a07e", lN = "u432",
            lO = "079a28c891544a478f1ae1ff94c4c32b", lP = "u433", lQ = "26b38355e10042e6a5bcda831c8798da", lR = "u434",
            lS = "85316e2cb7d34bcf89d31f15765c78ee", lT = "u435", lU = "0b46b784139f4bd1bc8d82501124d18f", lV = "u436",
            lW = "8759ea5ae475424997bf189a0d50d9be", lX = "u437", lY = "87da8ff07f0c416a98ed1829374d2d95", lZ = "u438",
            ma = "ac053960c1754d61bb0b9a7eb9c57975", mb = "u439", mc = "dc47b90eb6f44c3086143800c7a2748e", md = "u440",
            me = "75681205badb4a3894fdadb854d8a066", mf = "u441", mg = "75ffb51a6c24430ba6887eafc13790bd", mh = "u442",
            mi = "0b2b384e26dd4aafa5c96ee21e606d36", mj = "u443", mk = "d1400e8dec4243548c4165154059af98", ml = "u444",
            mm = "a3f4326480094556bc07e19e09f2c65d", mn = "u445", mo = "bdecd33d9005479fb24cbc5b7d02f67d", mp = "u446",
            mq = "04b64529999d4e5b8d1058332b082b48", mr = "u447", ms = "c73b469a00f8425fbc8453341c157c5f", mt = "u448",
            mu = "a8d15a6a56fd4db8b14c34e27fa572a8", mv = "u449", mw = "a45de412b11b41efbb83908b4daf6180", mx = "u450",
            my = "6d7c60bee57b497b8ed2f725f94e6b9c", mz = "u451", mA = "034c2c6e283b493bbc30458e23a41672", mB = "u452",
            mC = "e9b722a6139849ecad0b88a4b3fc5b82", mD = "u453", mE = "2faa4c3b64d94a069946e697da82bc69", mF = "u454",
            mG = "beb10644887944fb9bb18236093d68f6", mH = "u455", mI = "dbade85b441d4dbdbe15d79f7dd65f9b", mJ = "u456",
            mK = "61b6c54e92a6419c93f3f9f651beabe1", mL = "u457", mM = "c97f9bccf14c42fa84a187b1d99f416d", mN = "u458",
            mO = "eb28d1df0f93438a888cce2ad8dc2784", mP = "u459", mQ = "bb02acaadffe4f68b659651046264206", mR = "u460",
            mS = "deb4093eded542409f5cd5f2ba8340cd", mT = "u461", mU = "1e95de3d433f46f8a76821bdfa88628a", mV = "u462",
            mW = "9bdb62b98bcb4d60ae7d37bd3b9d1943", mX = "u463", mY = "e48ffb2f123b4e0baf9b621899998e3c", mZ = "u464",
            na = "4987e387fb3841fe9e41a6865fc3c048", nb = "u465", nc = "35473c73cd504d139de6c6fe78e80fa7", nd = "u466",
            ne = "24a923987e434e5888d792c01922f6ce", nf = "u467", ng = "2fd53716354f442f9fef0acf996d23cb", nh = "u468",
            ni = "81871ad0155d4ba181d4e5a9f621d091", nj = "u469", nk = "2a896a187da848719e3a5283feaa133b", nl = "u470",
            nm = "cfa3f9161ab240eab914b39507abbde8", nn = "u471", no = "418f5be9396642f192bfd6e89527fea8", np = "u472",
            nq = "259176512a214044b7b3ad2273ca496c", nr = "u473", ns = "d5384708408e495b817ab4b5c8a3ff95", nt = "u474",
            nu = "2f12b2c51ab74eb19a8ddd515e74db3e", nv = "u475", nw = "86f398abe7e646d5a3af0b91612a873a", nx = "u476",
            ny = "50415ef1aef7491591c4c1debe1399bc", nz = "u477", nA = "f3b8e0cdaebd4bbda9016cb6ae38f029", nB = "u478",
            nC = "a6648a1df9914243bdc465f5162a6c38", nD = "u479", nE = "24824c1fc21746269a039f2a718ddbc1", nF = "u480",
            nG = "69ee0183113f4b6fa319d7cc3f6fa0ec", nH = "u481", nI = "749d1294b12b4b8091cbc01826002c5e", nJ = "u482",
            nK = "3c23ee99e3e845af888e3f2b7dca2c5c", nL = "u483", nM = "9bcac6486ae643749f63485998a9e423", nN = "u484",
            nO = "3f3b3abc06b040f68da41940851b6cae", nP = "u485", nQ = "3e57ed5de9314c7aa0a1e6cf20fc4595", nR = "u486",
            nS = "0550f219e8954ef5bbbee7cccd08cacc", nT = "u487", nU = "3fe9a4f4b3bc4573be1db1ea19569aca", nV = "u488",
            nW = "8bef29df917e4a1da9b7d2fe8c31f2bb", nX = "u489";
        return _creator();
    })());
*/
function addNewPostButtonOnClick() {
    let newPostPanel = document.getElementById("u471");
    newPostPanel.style.visibility = "visible";
    newPostPanel.style.display = "flex";
}


function expandNewPostButtonOnClick() {
    let expandButton = document.getElementById("u474");
    let closeButton = document.getElementById("u475");
    let postButton = document.getElementById("u476");
    let titleField = document.getElementById("u477");
    let dummyImage = document.getElementById("u478");
    let descriptionArea = document.getElementById("u479");
    let divider = document.getElementById("u480");
    let panel = document.getElementById("u473");

    let components = [expandButton, closeButton, postButton, titleField, dummyImage, descriptionArea, divider, panel];
    let expanded = expandButton.innerHTML.localeCompare("⮟") == 0;

    let posDif = expanded ? 277 : -277;

    components.forEach(comp => {
        comp.style.top = (comp.offsetTop + posDif) + "px";
    });

    if (expanded) {
        resizePanelHeight("u473", 359);
        resizePanelHeight("u479", 224);
        expandButton.innerHTML = "⮝";
    } else {
        resizePanelHeight("u473", 637);
        resizePanelHeight("u479", 502);
        expandButton.innerHTML = "⮟";
    }
    console.log(expanded);
}

let setCompOffsetTop = function(componentId, newTop) {
    let component = document.getElementById(componentId);
    component.style.top = newTop + "px";
    let componentDiv = document.getElementById(componentId + "_div");
    componentDiv.style.top = newTop + "px";
}


let resizePanelHeight = function(componentId, newHeight) {
    let component = document.getElementById(componentId);
    component.style.height = newHeight + "px";
    let componentDiv = document.getElementById(componentId + "_div");
    componentDiv.style.height = newHeight + "px";
    let componentInput = document.getElementById(componentId + "_input");
    if (componentInput !== null) {
        componentInput.style.height = newHeight + "px";
    }
}

function closeButtonOnClick() {
    let newPostPanel = document.getElementById("u471");
    newPostPanel.style.visibility = "hidden";
    newPostPanel.style.display = "none";
}