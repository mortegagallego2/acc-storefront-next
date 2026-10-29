/**
 * Copyright 2026 Salesforce, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Brand assets referenced from code (an `<img>` src, the favicon link and the font preload can't
 * live in CSS). Colors, typography and sizing live in `src/theme/brands/salitre.css`.
 *
 * To switch brand, point these three at another folder under `public/`; the template defaults are
 * `/images/logo.svg`, `/favicon.ico` and `/fonts/sen-variable.woff2`.
 */
import logo from '/brand/salitre/logo.svg';
import favicon from '/brand/salitre/favicon.ico';
import primaryFont from '/brand/salitre/jost-variable.woff2';

export { logo, favicon, primaryFont };
